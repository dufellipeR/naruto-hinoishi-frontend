/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useEffect, useMemo } from 'react';

import {
  FiPower,
  FiEdit,
  FiDelete,
  FiTrash2,
  FiArrowLeft,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Character,
  TopBar,
  ActionButtons,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';
import { useToast } from '../../../hooks/toast';

interface Character {
  id: string;
  name: string;
  type: string;
  stat: {
    power: number;
  };
}

const Characters: React.FC = () => {
  const { user, signOut } = useAuth();
  const [characters, setCharacters] = useState<Character[]>([]);

  const { addToast } = useToast();

  useEffect(() => {
    api.get('/character/all').then((response) => {
      setCharacters(response.data);
    });
  }, []);

  const handleDelete = useCallback(
    (char_id) => {
      try {
        api
          .delete(`/character/${char_id}`)
          .then((response) => setCharacters(response.data));
        addToast({
          type: 'success',
          title: 'Successfully removed character',
        });
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Has been occured an error on removing character',
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
        <Link to="/admin/dashboard">
          <FiArrowLeft size={42} color="#ff9000" />
        </Link>
        <TopBar>
          <h2>Characters</h2>
          <Link to="/admin/character/new">New</Link>
        </TopBar>
        {characters &&
          characters.map((char) => (
            <Character>
              <span>{char.type}</span>
              <span>{char.name}</span>
              <span>{char.stat.power}</span>
              <ActionButtons>
                <Link to={`/admin/character/edit/${char.id}`}>
                  <FiEdit />
                </Link>
                <button type="button" onClick={() => handleDelete(char.id)}>
                  <FiTrash2 />
                </button>
              </ActionButtons>
            </Character>
          ))}
      </Content>
    </Container>
  );
};

export default Characters;
