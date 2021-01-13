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
            <img src={logoImg} alt="Go Barber" />
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
        <Background />
      </Container>
    </>
  );
};

export default ForgotPassword;
