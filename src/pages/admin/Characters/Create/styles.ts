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
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 50px;


  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#711a19')};
      }
    }
  }
`;

export const AddOns = styled.section`
  display: grid;
  max-width: 1120px;
  margin: 64px auto;
  color: #711a19;

  h1 {
    color: white;
    margin-bottom: 10px;
  }
`;

export const On = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-bottom: 100px;
`;

export const List = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 0px solid #232129;
  padding: 5%;
  display: grid;
`;

export const Item = styled.span`
  display: flex;
  justify-content: space-between;
  max-width: 497px;
  max-height: 20px;

  button {
    border: 0;
  }
`;
