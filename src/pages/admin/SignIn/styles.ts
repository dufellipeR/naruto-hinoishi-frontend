import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import signInBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  overflow-x: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
 from {
  opacity: 0;
  transform: translateX(-100px);

 }
 to {
  opacity:1;
  transform: translateX(0)
 }
`;
const appearFromRight = keyframes`
 from {
  opacity: 0;
  transform: translateX(100px);

 }
 to {
  opacity:1;
  transform: translateX(0)
 }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 0.5s;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: center;

    h1 {
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

  > a {
    color: white;
    display: block;
    margin-top: -20px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#711a19')};
    }
  }
`;

export const Background1 = styled.div`
  flex: 1;
  background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1vdrt-20c2c90a-8bb8-45f7-87ae-d81c1328272c.png/v1/fit/w_300,h_512,strp/young_sasuke_curse_mark_render__naruto_ol__by_maxiuchiha22_dd1vdrt-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMXZkcnQtMjBjMmM5MGEtOGJiOC00NWY3LTg3YWUtZDgxYzEzMjgyNzJjLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.l9oaDoHQrYhjdJPqvvqWkn1mIZBtMvWb9y22CGpOXQ0')
    no-repeat left;
  background-size: 300px;
  animation: ${appearFromLeft} 4s;
`;

export const Background = styled.div`
  flex: 1;
  background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1vd6u-d60de897-b13c-4aa4-9c2d-81454b250cad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDF2ZDZ1LWQ2MGRlODk3LWIxM2MtNGFhNC05YzJkLTgxNDU0YjI1MGNhZC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TUSwRhhD-X6MIR0CWVOOi2A7oXn17pR_GNU2ghGVo-M')
    no-repeat right;
  background-size: 300px;
  animation: ${appearFromRight} 4s;
`;
