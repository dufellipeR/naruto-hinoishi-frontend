/* eslint-disable radix */
import React, { useState, useCallback, useRef, useEffect } from 'react';

import * as Yup from 'yup';

import { FiDelete, FiPower } from 'react-icons/fi';
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
  AddOns,
  On,
  List,
  Item,
} from './styles';
import Input from '../../../../components/Input';
import { useToast } from '../../../../hooks/toast';
import getValidationErrors from '../../../../utils/getValidationErrors';
import Button from '../../../../components/Button';
import api from '../../../../services/api';
import Select from '../../../../components/Select';
import Card from '../../../../components/Card';

interface CreateCharacterForm {
  render: string;
  rendermarg: number;
  type: string;
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

interface Character {
  id: string;
  render: string;
  rendermarg: number;
  type: string;
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
  power: number;
}

interface Item {
  id: string;
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

interface IOpt {
  value: string;
  label: string;
}

const CreateCharacter: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const addFormRef = useRef<FormHandles>(null);

  const { user, signOut } = useAuth();

  const [rendermargP, setRendermargP] = useState(0);
  const [renderP, setRenderP] = useState('');
  const [typeP, setTypeP] = useState('');
  const [nameP, setNameP] = useState('');
  const [powerP, setPowerP] = useState(0);

  const [character, setCharacter] = useState<Character>();

  const [kekkeis, setKekkeis] = useState<IOpt[]>([]);
  const [affiliations, setAffiliations] = useState<IOpt[]>([]);
  const [clans, setClans] = useState<IOpt[]>([]);
  const [teams, setTeams] = useState<IOpt[]>([]);

  const [selectedKekkei, setSelectedKekkei] = useState<IOpt[]>([]);
  const [selectedAft, setSelectedAft] = useState<IOpt[]>([]);
  const [selectedClan, setSelectedClan] = useState<IOpt[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<IOpt[]>([]);

  const history = useHistory();

  const { addToast } = useToast();

  useEffect(() => {
    api.get<Item[]>('/kekkei').then((response) => {
      const formatData: any[] = response.data.map((item) => {
        return {
          value: `${item.id},${item.name}`,
          label: item.name,
        };
      });
      setKekkeis(formatData);
    });
  }, []);

  useEffect(() => {
    api.get<Item[]>('/clan').then((response) => {
      const formatData: any[] = response.data.map((item) => {
        return {
          value: `${item.id},${item.name}`,
          label: item.name,
        };
      });
      setClans(formatData);
    });
  }, []);

  useEffect(() => {
    api.get<Item[]>('/affiliation').then((response) => {
      const formatData: any[] = response.data.map((item) => {
        return {
          value: `${item.id},${item.name}`,
          label: item.name,
        };
      });
      setAffiliations(formatData);
    });
  }, []);

  useEffect(() => {
    api.get<Item[]>('/team').then((response) => {
      const formatData: any[] = response.data.map((item) => {
        return {
          value: `${item.id},${item.name}`,
          label: item.name,
        };
      });
      setTeams(formatData);
    });
  }, []);

  const addKekkei = useCallback(() => {
    const kekkeiForm = addFormRef.current?.getFieldValue('kekkei');
    const value = kekkeiForm.split(',');

    setSelectedKekkei([
      ...selectedKekkei,
      { value: value[0], label: value[1] },
    ]);
  }, [selectedKekkei]);

  const removeKekkei = useCallback(
    (id) => {
      setSelectedKekkei(selectedKekkei.filter((k) => k.value !== id));
    },
    [selectedKekkei],
  );

  const addAft = useCallback(() => {
    const kekkeiForm = addFormRef.current?.getFieldValue('affiliation');
    const value = kekkeiForm.split(',');

    setSelectedAft([...selectedAft, { value: value[0], label: value[1] }]);
  }, [selectedAft]);

  const removeAft = useCallback(
    (id) => {
      setSelectedAft(selectedAft.filter((k) => k.value !== id));
    },
    [selectedAft],
  );

  const addClan = useCallback(() => {
    const kekkeiForm = addFormRef.current?.getFieldValue('clan');
    const value = kekkeiForm.split(',');

    setSelectedClan([...selectedClan, { value: value[0], label: value[1] }]);
  }, [selectedClan]);

  const removeClan = useCallback(
    (id) => {
      setSelectedClan(selectedClan.filter((k) => k.value !== id));
    },
    [selectedClan],
  );

  const addTeam = useCallback(() => {
    const kekkeiForm = addFormRef.current?.getFieldValue('team');
    const value = kekkeiForm.split(',');

    setSelectedTeam([...selectedTeam, { value: value[0], label: value[1] }]);
  }, [selectedTeam]);

  const removeTeam = useCallback(
    (id) => {
      setSelectedTeam(selectedTeam.filter((k) => k.value !== id));
    },
    [selectedTeam],
  );

  const handleAddOns = useCallback(async () => {
    if (!character) {
      addToast({
        type: 'error',
        title: 'An error has been occured on add-ons register',
        description: 'There is no character to add into',
      });
      return;
    }

    const promiseKekkei = api.post('/charkekkei/bunch/', {
      character_id: character.id,
      items: selectedKekkei,
    });

    const promiseAft = api.post('/charaffiliation/bunch/', {
      character_id: character.id,
      items: selectedAft,
    });

    const promiseClan = api.post('/charclan/bunch/', {
      character_id: character.id,
      items: selectedClan,
    });

    const promiseTeam = api.post('/charteam/bunch/', {
      character_id: character.id,
      items: selectedTeam,
    });

    Promise.all([promiseKekkei, promiseAft, promiseClan, promiseTeam])
      .then(() => {
        addToast({
          type: 'success',
          title: `Successfully created add-ons to ${character.name}`,
        });
        history.push('/admin/characters');
      })
      .catch(() => {
        addToast({
          type: 'error',
          title: `An error has been occured on add-ons register`,
        });
      });
  }, [
    addToast,
    selectedClan,
    selectedKekkei,
    character,
    selectedTeam,
    selectedAft,
    history,
  ]);

  const handlePreview = useCallback(() => {
    const type = formRef.current?.getFieldValue('type');
    const name = formRef.current?.getFieldValue('name');
    const strength = formRef.current?.getFieldValue('strength');
    const intelligence = formRef.current?.getFieldValue('intelligence');
    const speed = formRef.current?.getFieldValue('speed');
    const taijutsu = formRef.current?.getFieldValue('taijutsu');
    const ninjutsu = formRef.current?.getFieldValue('ninjutsu');
    const genjutsu = formRef.current?.getFieldValue('genjutsu');
    const stamina = formRef.current?.getFieldValue('stamina');
    const willpower = formRef.current?.getFieldValue('willpower');
    const render = formRef.current?.getFieldValue('render');
    const rendermarg = parseInt(formRef.current?.getFieldValue('rendermarg'));
    setRendermargP(rendermarg);
    setTypeP(type);
    setNameP(name);
    setRenderP(render);
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
    async (data: CreateCharacterForm) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          render: Yup.string().required('A render must be choosen'),
          type: Yup.string().default('Default'),
          name: Yup.string().required('A name must be choosen'),
          desc: Yup.string(),
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
          render,
          type,
          name,
          desc,
          strength,
          intelligence,
          speed,
          taijutsu,
          ninjutsu,
          genjutsu,
          stamina,
          willpower,
        } = data;

        setRenderP(render);
        setTypeP(type);
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

        api.post('/character/', data).then((response) => {
          setCharacter(response.data);
          addToast({
            type: 'success',
            title: `Criado personagem [${data.type}] ${data.name}`,
          });
        });

        // history.push('/characters');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
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

      {!character && (
        <Content>
          <Card
            aft_pcolor="#711a19"
            aft_scolor="#000"
            aft_icon="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/726ccb19-8cdb-4565-9abc-6dc90cd8c886/deddum9-62e6d404-36ee-43d2-a9d5-7b8555a0cca6.png/v1/fill/w_18,h_18,strp/akatsuki_symbol_by_zero1533_deddum9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xOCIsInBhdGgiOiJcL2ZcLzcyNmNjYjE5LThjZGItNDU2NS05YWJjLTZkYzkwY2Q4Yzg4NlwvZGVkZHVtOS02MmU2ZDQwNC0zNmVlLTQzZDItYTlkNS03Yjg1NTVhMGNjYTYucG5nIiwid2lkdGgiOiI8PTE4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vqwNDCnoxwcmHgPcAekc0a3AgAqrZ0bF0iBtLhM0kVE"
            char_image={renderP}
            char_name={nameP}
            char_type={typeP}
            char_power={powerP}
            render_marg={rendermargP}
          />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <div>
              <Input name="render" type="text" placeholder="Render" />
              <Input name="rendermarg" type="text" placeholder="Margin" />
              <Input name="type" type="text" placeholder="Type" />
              <Input name="name" type="text" placeholder="Name" />
              <Input name="desc" type="text" placeholder="Desc" />
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
      )}
      {!!character && (
        <AddOns>
          <p style={{ color: 'white' }}>
            Character: [{character.type}] {character.name}
          </p>
          <p>* You need to add the add-ons to the box aside</p>
          <Form ref={addFormRef} onSubmit={handleAddOns}>
            <On>
              <div>
                <h1>Choose Kekkei Genkai</h1>
                <Select name="kekkei" options={kekkeis} />
                <Button type="button" onClick={addKekkei}>
                  Add
                </Button>
              </div>
              <List>
                {selectedKekkei &&
                  selectedKekkei.map((kekkei) => (
                    <Item key={kekkei.value}>
                      <span>
                        {kekkei.label} - {kekkei.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeKekkei(kekkei.value)}
                      >
                        <FiDelete size={12} color="#711a19" />
                      </button>
                    </Item>
                  ))}
              </List>
            </On>
            <On>
              <div>
                <h1>Choose Affiliation</h1>
                <Select name="affiliation" options={affiliations} />
                <Button type="button" onClick={addAft}>
                  Add
                </Button>
              </div>
              <List>
                {selectedAft &&
                  selectedAft.map((aft) => (
                    <Item key={aft.value}>
                      <span>
                        {aft.label} - {aft.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeAft(aft.value)}
                      >
                        <FiDelete size={12} color="#711a19" />
                      </button>
                    </Item>
                  ))}
              </List>
            </On>
            <On>
              <div>
                <h1>Choose Clan</h1>
                <Select name="clan" options={clans} />
                <Button type="button" onClick={addClan}>
                  Add
                </Button>
              </div>
              <List>
                {selectedClan &&
                  selectedClan.map((clan) => (
                    <Item key={clan.value}>
                      <span>
                        {clan.label} - {clan.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeClan(clan.value)}
                      >
                        <FiDelete size={12} color="#711a19" />
                      </button>
                    </Item>
                  ))}
              </List>
            </On>
            <On>
              <div>
                <h1>Choose Team</h1>
                <Select name="team" options={teams} />
                <Button type="button" onClick={addTeam}>
                  Add
                </Button>
              </div>
              <List>
                {selectedTeam &&
                  selectedTeam.map((team) => (
                    <Item key={team.value}>
                      <span>
                        {team.label} - {team.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeTeam(team.value)}
                      >
                        <FiDelete size={12} color="#711a19" />
                      </button>
                    </Item>
                  ))}
              </List>
            </On>
            <Button type="submit"> Create Add-Ons</Button>
          </Form>
        </AddOns>
      )}
    </Container>
  );
};

export default CreateCharacter;
