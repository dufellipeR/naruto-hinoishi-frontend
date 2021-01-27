import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackground from '../../assets/cadBackground.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ${shade(0.5, '#ff9000')}; */

  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
 from {
  opacity: 0;
  transform: translateX(50px);

 }
 to {
  opacity:1;
  transform: translateX(0)
 }
`;

const appearFromLeft = keyframes`
 from {
  opacity: 0;
  transform: translateX(-50px);

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

  animation: ${appearFromRight} 0.5s;

  form {
    /* padding: 40px; */
    /* background-color: white; */
    margin: 10px 0;
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
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: white;
    display: block;
    margin-top: 20px;
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

export const Background = styled.div`
  flex: 1;
  background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd2wylx-c07c6f4a-66c9-4843-80a4-60138e931fbe.png/v1/fit/w_300,h_512,strp/itachi___crows_shadow_render__naruto_ol__by_maxiuchiha22_dd2wylx-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01MTIiLCJwYXRoIjoiXC9mXC84NGRjMTNiNy1hMmU3LTRiNDUtODNlYy0zMTFlNzJlODI5MDBcL2RkMnd5bHgtYzA3YzZmNGEtNjZjOS00ODQzLTgwYTQtNjAxMzhlOTMxZmJlLnBuZyIsIndpZHRoIjoiPD01MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.LP7ICV2XDM26Q4JaZolQth2YHxlqqvtN4cKawQ48qb4')
    no-repeat top center;
  background-size: 400px;
  background-color: #711a19;
  animation: ${appearFromLeft} 2s;
  h2 {
    color: white;
    position: absolute;
    top: 400px;
    margin-left: 100px;
    max-width: 500px;
  }
`;
