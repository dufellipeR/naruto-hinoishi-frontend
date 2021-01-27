/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useRef } from 'react';
import * as Yup from 'yup';

import { FiPower } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Preview,
  Character,
} from './styles';
import Input from '../../../../components/Input';
import { useToast } from '../../../../hooks/toast';
import getValidationErrors from '../../../../utils/getValidationErrors';
import Button from '../../../../components/Button';
import api from '../../../../services/api';

interface CreateTeamForm {
  icon: string;
  name: string;
  desc: string;
  strength: number;
  intelligence: number;
  speed: number;
  taijutsu: number;
  ninjutsu: number;
  genjutsu: number;
  stamina: number;
  willpower: number;
}

const CreateTeam: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user, signOut } = useAuth();

  const [iconP, setIconP] = useState('');
  const [nameP, setNameP] = useState('Ninja');
  const [powerP, setPowerP] = useState(0);

  const history = useHistory();
  const { addToast } = useToast();

  const handlePreview = useCallback(() => {
    const name = formRef.current?.getFieldValue('name');
    const strength = formRef.current?.getFieldValue('strength');
    const intelligence = formRef.current?.getFieldValue('intelligence');
    const speed = formRef.current?.getFieldValue('speed');
    const taijutsu = formRef.current?.getFieldValue('taijutsu');
    const ninjutsu = formRef.current?.getFieldValue('ninjutsu');
    const genjutsu = formRef.current?.getFieldValue('genjutsu');
    const stamina = formRef.current?.getFieldValue('stamina');
    const willpower = formRef.current?.getFieldValue('willpower');
    const icon = formRef.current?.getFieldValue('icon');
    setNameP(name);
    setIconP(icon);
    setPowerP(() => {
      const Tot =
        Number(strength) +
        Number(intelligence) +
        Number(speed) +
        Number(taijutsu) +
        Number(ninjutsu) +
        Number(genjutsu) +
        Number(stamina) +
        Number(willpower);

      return Math.round(Tot / 8);
    });
  }, []);

  const handleSubmit = useCallback(
    async (data: CreateTeamForm) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          icon: Yup.string(),
          name: Yup.string().required('A name must be choosen'),
          strength: Yup.number().default(0),
          intelligence: Yup.number().default(0),
          speed: Yup.number().default(0),
          taijutsu: Yup.number().default(0),
          ninjutsu: Yup.number().default(0),
          genjutsu: Yup.number().default(0),
          stamina: Yup.number().default(0),
          willpower: Yup.number().default(0),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          icon,
          name,
          strength,
          intelligence,
          speed,
          taijutsu,
          ninjutsu,
          genjutsu,
          stamina,
          willpower,
        } = data;

        setIconP(icon);
        setNameP(name);
        setPowerP(() => {
          const Tot =
            Number(strength) +
            Number(intelligence) +
            Number(speed) +
            Number(taijutsu) +
            Number(ninjutsu) +
            Number(genjutsu) +
            Number(stamina) +
            Number(willpower);

          return Math.round(Tot / 8);
        });

        await api.post('/team', data);

        addToast({
          type: 'success',
          title: 'Successfully created team',
        });

        history.push('/admin/team');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Error',
          description: 'An error has been occured , check form data',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/726ccb19-8cdb-4565-9abc-6dc90cd8c886/dec5tqx-5945acdf-45f1-43fb-837c-de46d292ded6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzI2Y2NiMTktOGNkYi00NTY1LTlhYmMtNmRjOTBjZDhjODg2XC9kZWM1dHF4LTU5NDVhY2RmLTQ1ZjEtNDNmYi04MzdjLWRlNDZkMjkyZGVkNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lR8DHzTWO9wX9hbehFFHbmBnXHesj51v9A6EZk1TyYE"
            alt="Go Barber"
          />
          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <Link to="/profile" />
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Preview>
          <h2>Preview</h2>
          <Character>
            <div>
              <img src={iconP} alt="" width={18} />
              <span>{`${nameP} + ${powerP}`}</span>
            </div>
          </Character>
        </Preview>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <Input name="icon" type="text" placeholder="Icon" />
            <Input name="name" type="text" placeholder="Name" />
          </div>
          <div>
            <Input name="strength" type="number" placeholder="Strength" />
            <Input
              name="intelligence"
              type="number"
              placeholder="Intelligence"
            />
            <Input name="speed" type="number" placeholder="Speed" />
            <Input name="taijutsu" type="number" placeholder="Taijutsu" />
          </div>
          <div>
            <Input name="ninjutsu" type="number" placeholder="Ninjutsu" />
            <Input name="genjutsu" type="number" placeholder="Genjutsu" />
            <Input name="stamina" type="number" placeholder="Stamina" />
            <Input name="willpower" type="number" placeholder="Willpower" />
          </div>
          <Button type="button" onClick={handlePreview}>
            Preview
          </Button>
          <Button type="submit"> Create </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateTeam;
