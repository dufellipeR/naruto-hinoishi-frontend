/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import React, { useCallback, useEffect, useState } from 'react';

import { FiArrowLeft, FiPower, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Background,
  Filters,
  FilterGroup,
  Search,
  Order,
  Pag,
  NotFound,
} from './styles';

import { useAuth } from '../../hooks/auth';
import Card from '../../components/Card';
import api from '../../services/api';

export interface Card {
  icon: string;
  pcolor: string;
  scolor: string;
  render: string;
  rendermarg: number;
  power: number;
  type: string;
  name: string;
  char_id: string;
  id: string;
}

const Cards: React.FC = () => {
  const { user, signOut } = useAuth();

  const [cards, setCards] = useState<Card[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [input, setInput] = useState('Naruto Uzumaki');

  const [page, setPage] = useState(1);

  const [count, setCount] = useState(0);

  const [pagcards, setPagcards] = useState<Card[]>([]);

  useEffect(() => {
    setIsLoading(true);
    api.get<Card[]>('/cards/me?filter=received').then((response) => {
      setIsLoading(false);
      setCards(response.data);
    });
  }, []);

  const handlePageChange = useCallback(
    (p: number): void => {
      const skip = p * 20;
      let init = 0;
      const end = skip;
      if (p < 1) {
        return;
      }

      if (p > 1) {
        init = skip - 20;
        setPage(p);

        setPagcards(cards.slice(init, end));
      }

      setPage(p);

      setPagcards(cards.slice(init, end));
    },
    [cards],
  );

  useEffect(() => {
    handlePageChange(page);
    setCount(Math.ceil(cards.length / 20));
  }, [cards, handlePageChange, page]);

  const handleFilter = (e: string): void => {
    api
      .get<Card[]>(`/cards/me?filter=${e}`)
      .then((response) => setCards(response.data));
  };

  const handleInput = (e: string): void => {
    setInput(e);
  };

  const sendInput = (): void => {
    api.get<Card[]>(`/cards/me?name=${input}`).then((response) => {
      setPage(1);
      setIsLoading(false);
      setCards(response.data);
    });
  };

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

      <Filters>
        <Link to="dashboard">
          <FiArrowLeft size={64} />
        </Link>
        <h3>My Cards</h3>
        <FilterGroup>
          <Search>
            <input
              type="text"
              defaultValue="Naruto Uzumaki"
              onChange={(e) => handleInput(e.target.value)}
              placeholder="Naruto Uzumaki"
            />
            <button type="button" onClick={() => sendInput()}>
              <FiSearch size={20} />
            </button>
          </Search>
          <Order>
            <label htmlFor="order">Order By:</label>
            <select
              defaultValue="received"
              onChange={(e) => handleFilter(e.target.value)}
              name="order"
              id="order"
            >
              <option value="received">Received</option>
              <option value="power">Power</option>
              <option value="name">Name</option>
            </select>
          </Order>
        </FilterGroup>
      </Filters>
      {!isLoading && (
        <>
          <Content>
            {!!pagcards.length &&
              pagcards.map((card) => (
                <Card
                  key={card.id}
                  aft_icon={card.icon}
                  aft_pcolor={`#${card.pcolor}`}
                  aft_scolor={
                    card.scolor !== '0'
                      ? `#${card.scolor}`
                      : `#00${card.scolor}`
                  }
                  char_image={card.render}
                  char_power={card.power}
                  char_type={card.type}
                  char_name={card.name}
                  render_marg={card.rendermarg}
                />
              ))}
            {!pagcards.length && (
              <>
                <NotFound>
                  <h5> No cards founded with the given filters</h5>
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcxm0r2-90367ba4-42fc-45c3-97c9-9f4555dd18e4.gif"
                    alt=""
                    srcSet=""
                  />
                </NotFound>
              </>
            )}
          </Content>
          <Pag>
            <Pagination
              count={count}
              shape="rounded"
              onChange={(e, p) => handlePageChange(p)}
            />
          </Pag>
        </>
      )}
      {!!isLoading && (
        <img
          style={{ marginLeft: `${40}%` }}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j3ir-c3e19f63-d34a-42f8-9016-087d0401362b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDFqM2lyLWMzZTE5ZjYzLWQzNGEtNDJmOC05MDE2LTA4N2QwNDAxMzYyYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.UCJzmNa2SMtAGekSAPt7mkMBK9LyZMGh7LKN_UUGCFo"
          alt=""
          srcSet=""
        />
      )}
    </Container>
  );
};

export default Cards;
