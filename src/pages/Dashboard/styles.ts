import styled from 'styled-components';
import { shade } from 'polished';
import uchiha from '../../assets/uchiha_bg.png';

export const Container = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  height: 100vh;
  background: url(${uchiha}) no-repeat top center;
  background-color: #191921;
`;

export const Header = styled.header`
  padding: 5px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 50px;
  }
  button {
    margin-left: auto;
    background: transparent;
    border: 0;
    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: row;
    margin-left: 16px;
    line-height: 24px;
    span {
      color: #f4ede8;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      color: #ff9000;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  height: 100vh;
  margin: 32px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const List = styled.ul`
  list-style: none;

  li {
    display: flex;
    color: #f4ede8;
    text-shadow: 2px 2px #000;
    font-size: 20px;
    transition: font-size ease 0.2s;
    margin-bottom: 25px;
    min-width: 30px;
    max-width: 50px;
    cursor: pointer;
    img {
      position: absolute;
      right: 90%;
      visibility: hidden;
      width: 80px;
      height: auto;
      transition: visibility 0.1s;
    }
    &:hover {
      font-size: 60px;
      img {
        visibility: visible;
      }
    }
  }
`;

export const Background = styled.div`
  z-index: -1;
  position: absolute;
  overflow-y: hidden;
`;
