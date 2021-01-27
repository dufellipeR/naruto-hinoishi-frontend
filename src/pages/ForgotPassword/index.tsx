import React, { useCallback, useRef, useState } from 'react';

import { FiLogIn, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, AnimationContainer, Content } from './styles';
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado',
          description: `Enviamos um e-mail para confirmar a recuperação de senha,
           cheque sua caixa de entrada`,
        });

        // history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'info',
          title: 'Erro na recuperação de senha',
          description: `Ocorreu um erro ao tentar realizar a recuperação de senha,
            tente novamente mais tarde`,
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );
  return (
    <>
      <Container>
        <Content>
          <AnimationContainer>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/726ccb19-8cdb-4565-9abc-6dc90cd8c886/dec5tqx-5945acdf-45f1-43fb-837c-de46d292ded6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzI2Y2NiMTktOGNkYi00NTY1LTlhYmMtNmRjOTBjZDhjODg2XC9kZWM1dHF4LTU5NDVhY2RmLTQ1ZjEtNDNmYi04MzdjLWRlNDZkMjkyZGVkNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lR8DHzTWO9wX9hbehFFHbmBnXHesj51v9A6EZk1TyYE"
              alt="Go Barber"
              style={{ width: 100 }}
            />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Recuperar Senha</h1>

              <Input
                icon={FiMail}
                name="email"
                type="text"
                placeholder="E-mail"
              />

              <Button loading={loading} type="submit">
                Recuperar
              </Button>
            </Form>

            <Link to="/">
              <FiLogIn size={16} /> Volta ao login
            </Link>
          </AnimationContainer>
        </Content>
        <Background>
          <h2>Don't worry,</h2>
          <h3>An e-mail will be send to you</h3>
        </Background>
      </Container>
    </>
  );
};

export default ForgotPassword;
