/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useEffect, useMemo } from 'react';

import { FiPower, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Entity,
} from './styles';

import logoImg from '../../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';
import api from '../../../services/api';

const DashboardAdm: React.FC = () => {
  const { user, signOut } = useAuth();

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
        <Entity>
          <h2>Characters</h2>
          <Link to="/admin/characters/">Edit characters</Link>
        </Entity>
        <Entity>
          <h2>Cards</h2>
          <Link to="/admin/cards/">Edit cards</Link>
        </Entity>
        <Entity>
          <h2>Users</h2>
          <Link to="/admin/users/">Edit users</Link>
        </Entity>
        <Entity>
          <h2>Friendships</h2>
          <Link to="/admin/friendship/">Edit Friendships</Link>
        </Entity>
        <Entity>
          <h2>Kekkei Genkai</h2>
          <Link to="/admin/kekkeis/">Edit Kekkei Genkai</Link>
        </Entity>
        <Entity>
          <h2>Affiliation</h2>
          <Link to="/admin/affiliation">Edit Affiliation</Link>
        </Entity>
        <Entity>
          <h2>Team</h2>
          <Link to="/admin/team">Edit Team</Link>
        </Entity>
        <Entity>
          <h2>Clan</h2>
          <Link to="/admin/clan">Edit clan</Link>
        </Entity>
      </Content>
    </Container>
  );
};

export default DashboardAdm;
