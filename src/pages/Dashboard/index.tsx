/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  List,
  Background,
} from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/726ccb19-8cdb-4565-9abc-6dc90cd8c886/dec5tqx-5945acdf-45f1-43fb-837c-de46d292ded6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzI2Y2NiMTktOGNkYi00NTY1LTlhYmMtNmRjOTBjZDhjODg2XC9kZWM1dHF4LTU5NDVhY2RmLTQ1ZjEtNDNmYi04MzdjLWRlNDZkMjkyZGVkNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lR8DHzTWO9wX9hbehFFHbmBnXHesj51v9A6EZk1TyYE"
            alt="GoBarber"
          />

          <Profile>
            <div>
              <span>Welcome,</span>
              <Link to="/profile">
                <strong>{user.name}</strong>
              </Link>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Background />

      <Content>
        <List>
          <li>
            <Link to="/friends">
              Friends
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34irr-dd5fb4b9-92a4-4a17-a7d7-52a9aa978bbe.png/v1/fill/w_350,h_350,strp/flying_thunder_god_kunai_render__naruto_ol__by_maxiuchiha22_dd34irr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTAiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMzRpcnItZGQ1ZmI0YjktOTJhNC00YTE3LWE3ZDctNTJhOWFhOTc4YmJlLnBuZyIsIndpZHRoIjoiPD0zNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5JvfjssD79Atm4r3s2ao2V1ZBCC-XnFDCheXYIvXyoQ"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/ranks">
              Ranks
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34irr-dd5fb4b9-92a4-4a17-a7d7-52a9aa978bbe.png/v1/fill/w_350,h_350,strp/flying_thunder_god_kunai_render__naruto_ol__by_maxiuchiha22_dd34irr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTAiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMzRpcnItZGQ1ZmI0YjktOTJhNC00YTE3LWE3ZDctNTJhOWFhOTc4YmJlLnBuZyIsIndpZHRoIjoiPD0zNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5JvfjssD79Atm4r3s2ao2V1ZBCC-XnFDCheXYIvXyoQ"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/cards">
              Cards
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34irr-dd5fb4b9-92a4-4a17-a7d7-52a9aa978bbe.png/v1/fill/w_350,h_350,strp/flying_thunder_god_kunai_render__naruto_ol__by_maxiuchiha22_dd34irr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTAiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMzRpcnItZGQ1ZmI0YjktOTJhNC00YTE3LWE3ZDctNTJhOWFhOTc4YmJlLnBuZyIsIndpZHRoIjoiPD0zNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5JvfjssD79Atm4r3s2ao2V1ZBCC-XnFDCheXYIvXyoQ"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/collection">
              Collection
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34irr-dd5fb4b9-92a4-4a17-a7d7-52a9aa978bbe.png/v1/fill/w_350,h_350,strp/flying_thunder_god_kunai_render__naruto_ol__by_maxiuchiha22_dd34irr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTAiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMzRpcnItZGQ1ZmI0YjktOTJhNC00YTE3LWE3ZDctNTJhOWFhOTc4YmJlLnBuZyIsIndpZHRoIjoiPD0zNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5JvfjssD79Atm4r3s2ao2V1ZBCC-XnFDCheXYIvXyoQ"
                alt=""
              />
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd34irr-dd5fb4b9-92a4-4a17-a7d7-52a9aa978bbe.png/v1/fill/w_350,h_350,strp/flying_thunder_god_kunai_render__naruto_ol__by_maxiuchiha22_dd34irr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNTAiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMzRpcnItZGQ1ZmI0YjktOTJhNC00YTE3LWE3ZDctNTJhOWFhOTc4YmJlLnBuZyIsIndpZHRoIjoiPD0zNTAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5JvfjssD79Atm4r3s2ao2V1ZBCC-XnFDCheXYIvXyoQ"
                alt=""
              />
            </Link>
          </li>
          <li>
            <del> Battle</del>
          </li>
        </List>
      </Content>
    </Container>
  );
};

export default Dashboard;
