/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
  Container,
  Identification,
  Power,
  Affiliation,
  CharImage,
  Stats,
  Type,
  Name,
  Char90ID,
} from './styles';

interface Stat {
  str: number;
  int: number;
  spd: number;
  stm: number;
  nin: number;
  tai: number;
  gen: number;
  wlp: number;
}

interface ICardProps {
  aft_icon: string;
  aft_pcolor: string;
  aft_scolor: string;
  char_image: string;
  char_power: number;
  char_type: string;
  char_name: string;
  render_marg: number;
}

const Card: React.FC<ICardProps> = ({
  aft_icon,
  aft_pcolor,
  aft_scolor,
  char_image,
  char_power,
  char_type,
  char_name,
  render_marg,
  ...rest
}) => {
  useEffect(() => {
    console.log(render_marg);
  }, [render_marg]);
  useEffect(() => {
    console.log(char_name);
  }, [char_name]);
  return (
    <Container
      style={{
        backgroundColor: `${aft_pcolor}`,
        backgroundImage: `linear-gradient(147deg, ${aft_pcolor} 0%,${aft_scolor} 74%)`,
        border: `2px solid ${
          char_power < 100 && char_power >= 90
            ? '#E72388'
            : char_power < 90 && char_power >= 80
            ? '#C9B037'
            : char_power < 80 && char_power >= 70
            ? '#B4B4B4'
            : '#6A3805'
        }`,
      }}
    >
      {char_power >= 90 && (
        <Char90ID>
          <Affiliation src={aft_icon} alt="" />

          <CharImage
            style={{ marginLeft: `${render_marg}px` }}
            src={char_image}
            alt={char_name}
          />
          <Power>{char_power}</Power>
        </Char90ID>
      )}
      {char_power < 90 && (
        <Identification>
          <Affiliation src={aft_icon} alt="" />

          <CharImage
            src={char_image}
            style={{ marginLeft: `${render_marg}px` }}
            alt={char_name}
          />
          <Power>{char_power}</Power>
        </Identification>
      )}

      <Stats>
        <hr />
        <div>
          {char_type !== 'Default' && (
            <Type>
              <i> 🞄 {char_type} </i>
            </Type>
          )}

          <Name> {char_name}</Name>
        </div>
      </Stats>
    </Container>
  );
};

export default Card;
