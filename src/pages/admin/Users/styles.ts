import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background-color: #711a19;
  height: 100vh;
  overflow-y: scroll;
`;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  > img {
    height: 80px;
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
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    span {
      color: #f4ede8;
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
  margin: 64px auto;
  display: flex;
  flex-direction: column;

  > a {
    max-width: 4%;
    margin-top: -40px;
    margin-bottom: 42px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  max-height: 2%;

  a {
    background-color: #ff9000;
    text-decoration: none;
    border-radius: 5%;
    padding: 1%;
    color: white;
  }
`;

export const Item = styled.div`
  background-color: #f8f9d2;
  background-image: linear-gradient(315deg, #f8f9d2 0%, #e8dbfc 74%);
  padding: 1%;
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 0.25fr;
  grid-template-rows: 25px;
  margin-bottom: 1%;

  color: black;
  border: 2px black;
  text-align: center;

  h2 {
    font-size: 2vw;
    font-weight: 200;
    margin-bottom: 5%;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ActionButtons = styled.span`
  display: flex;
  justify-content: space-between;

  button {
    border: 0;
  }
`;
