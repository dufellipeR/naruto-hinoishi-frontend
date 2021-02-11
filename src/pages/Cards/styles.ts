import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
  height: 100vh;
  background-color: #ff9000;
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
  min-height: 100vh;
  margin: 32px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 15px;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 32px auto;

  a {
    text-decoration: none;
    color: #711a19;
    max-width: 50px;
  }

  h3 {
    margin-bottom: 64px;
    font-size: 10vh;
    /* color: #711a19; */
    text-shadow: 1px 1px black;
  }

  div {
    display: flex;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
`;

export const Search = styled.div`
  input {
    border: 0;
    border-radius: 5px;
    padding: 5px;
    color: #666360;

    &::placeholder {
      text-align: center;
      color: #666360;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    margin-left: 5px;
    color: #711a19;
  }
`;

export const Order = styled.div`
  display: flex;
  justify-content: space-evenly;

  label {
    font-size: 2.5vh;
    margin-right: 5px;
    line-height: 35px;
  }

  select {
    min-height: 20px;
    border: 0;
    /* border-radius: 5px; */
    font-size: 3vh;
    color: white;
    background-color: #ff9000;
    cursor: pointer;
  }
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

export const Pag = styled.div`
  max-width: 300px;
  margin-left: 40%;
  border-radius: 5px;
`;

export const NotFound = styled.div`
  position: absolute;
  top: 60%;
  left: 35%;
  text-align: center;
  h5 {
    font-size: 3vh;
  }
`;
