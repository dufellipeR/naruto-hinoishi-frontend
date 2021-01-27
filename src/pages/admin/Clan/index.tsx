import React, { useState, useCallback, useEffect, useMemo } from 'react';

import { FiPower, FiEdit, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Kekkei,
  TopBar,
  ActionButtons,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

interface Clan {
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

const Clan: React.FC = () => {
  const { user, signOut } = useAuth();
  const [clans, setClan] = useState<Clan[]>([]);

  const { addToast } = useToast();

  useEffect(() => {
    api.get('/clan').then((response) => {
      setClan(response.data);
    });
  }, []);

  const handleDelete = useCallback(
    (clan_id) => {
      try {
        api
          .delete(`/clan/${clan_id}`)
          .then((response) => setClan(response.data));
        addToast({
          type: 'success',
          title: 'Clan removed',
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'An error has occured on removing Clan',
        });
      }
    },
    [addToast],
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
              <span>Bem-vindo, Eduardo</span>
              <Link to="/profile" />
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Link to="/admin/dashboard">
          <FiArrowLeft size={42} color="#ff9000" />
        </Link>
        <TopBar>
          <h2>Clans</h2>
          <Link to="/admin/clan/new">New</Link>
        </TopBar>
        <Kekkei>
          <span>Icon</span>
          <span>Name</span>
          <span>Strength</span>
          <span>Intelligence</span>
          <span>Speed</span>
          <span>Taijtusu</span>
          <span>Ninjutsu</span>
          <span>Genjutsu</span>
          <span>Stamina</span>
          <span>Willpower</span>
        </Kekkei>
        {clans &&
          clans.map((clan) => (
            <Kekkei key={clan.id}>
              <span>
                <img src={clan.icon} alt="" style={{ height: 18 }} />
              </span>
              <span style={{ fontSize: 12 }}>{clan.name}</span>
              <span>{clan.strength}</span>
              <span>{clan.intelligence}</span>
              <span>{clan.speed}</span>
              <span>{clan.taijutsu}</span>
              <span>{clan.ninjutsu}</span>
              <span>{clan.genjutsu}</span>
              <span>{clan.stamina}</span>
              <span>{clan.willpower}</span>
              <ActionButtons>
                <Link to={`/admin/clan/edit/${clan.id}`}>
                  <FiEdit />
                </Link>
                <button type="button" onClick={() => handleDelete(clan.id)}>
                  <FiTrash2 />
                </button>
              </ActionButtons>
            </Kekkei>
          ))}
        {!clans.length && (
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j4j0-df87620c-070f-4896-990c-c444944041a1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDFqNGowLWRmODc2MjBjLTA3MGYtNDg5Ni05OTBjLWM0NDQ5NDQwNDFhMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5JXAeWUpVCcXFAO6DkE9iAc_z24v2kmKqfpQHbJV0ZU"
              alt="Hinata thinking"
              style={{ width: 250 }}
            />
          </div>
        )}
      </Content>
    </Container>
  );
};

export default Clan;
