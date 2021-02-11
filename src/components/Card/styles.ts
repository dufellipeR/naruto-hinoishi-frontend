import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  font-size: 10px;
  height: 300px;
  max-width: 200px;
  color: white;
  text-shadow: 1px 1px black;
  min-width: 200px;
  /* box-shadow: 0 20px 20px rgba(0, 0, 0, 0.5), 0px 0px 50px rgba(0, 0, 0, 0.5); */
  padding: 5px;
  overflow: hidden;
  border-radius: 5px;

  &:hover {
    transform: translateY(-2%);
    transition: 0.2s ease-out;
  }
`;

export const Identification = styled.div`
  position: relative;
  min-height: 60%;
`;

export const Char90ID = styled.div`
  position: relative;
  min-height: 60%;

  &:before {
    content: '';
    z-index: 10;
    position: absolute;
    height: 200%;
    width: 200%;
    top: -120%;
    left: -120%;
    background: linear-gradient(
      transparent 0%,
      rgba(255, 255, 255, 0.1) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.1) 55%,
      transparent 100%
    );
    transition: all 2s;
    transform: rotate(-45deg);
    animation: shine 6s infinite forwards;
    filter: url(#wavy);
  }
  @keyframes shine {
    0% {
      top: -120%;
      left: -120%;
    }
    20% {
      left: 100%;
      top: 100%;
    }
    40% {
      left: 100%;
      top: 100%;
    }
    100% {
      left: 100%;
      top: 100%;
    }
  }
`;

export const CharImage = styled.img`
  position: relative;

  /* text-align: center; */
  /* max-width: 65%;
  max-height: 50%; */
  /* width: 85px; */
  /* margin-left: 55px; */
  display: block;
  max-width: 230px;
  max-height: 219px;
  /* width: auto;
  height: auto; */
  overflow: hidden;
`;

export const Affiliation = styled.img`
  position: absolute;
  z-index: 1;
  width: 18px;
  top: 2%;
  left: 2%;
`;

export const Power = styled.span`
  position: absolute;
  top: 0.1%;
  right: 2%;
  font-size: 3.2vh;
  font-weight: 300px;
`;

export const Stats = styled.div`
  position: relative;

  div {
    text-align: center;
    line-height: 25px;
    padding: 5%;
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;
  }
`;

export const Type = styled.span``;
export const Name = styled.span``;
