/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import { Container, Background, AnimationContainer, Content } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: object) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No minímo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com succeso!',
          description: 'Você já pode fazer seu logon no GoBarber',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <>
      <Container>
        <Background>
          <h2>
            {' '}
            Create a free account , collect cards and battle with your favorite
            characters !
          </h2>
        </Background>
        <Content>
          <AnimationContainer>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/726ccb19-8cdb-4565-9abc-6dc90cd8c886/dec5tqx-5945acdf-45f1-43fb-837c-de46d292ded6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzI2Y2NiMTktOGNkYi00NTY1LTlhYmMtNmRjOTBjZDhjODg2XC9kZWM1dHF4LTU5NDVhY2RmLTQ1ZjEtNDNmYi04MzdjLWRlNDZkMjkyZGVkNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lR8DHzTWO9wX9hbehFFHbmBnXHesj51v9A6EZk1TyYE"
              alt="Go Barber"
              style={{ width: 100 }}
            />

            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Join Us</h1>

              <Input icon={FiUser} name="name" type="text" placeholder="Name" />

              <Input
                icon={FiMail}
                name="email"
                type="text"
                placeholder="E-mail"
              />

              <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Password"
              />

              <Button type="submit"> Join </Button>
            </Form>

            <Link to="/">
              <FiArrowLeft size={16} /> Back to Login
            </Link>
          </AnimationContainer>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
