import React from 'react';
import styled from 'styled-components';

export default function Styles(){
  return(
    <style>{`
     * {
        margin: 0;
      }

      :root{
        --background-hover: rgb(231, 229, 229); 
      }

      html,
      body {
        overflow-x: hidden;
        width: 100%;
        height: 100%;
      }
      
      body {
        display: grid;
        place-items: center;
        background: url(../../src/images/mobile.svg) no-repeat center/cover;
        min-height: 812px;
        width: 100vw;
        height: 100vh;
      }
      

      @media (min-width: 630px) {
        body {
          background: url(../../src/images/desktop.svg) no-repeat center/cover;
          background-color: hsl(240, 3%, 7%);
        }
      }
    `}</style>
  )
}

export const Box = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
      z-index: 1;

  color: var(--gray);
  @media (min-width: 630px) {
    &:before{
      content: '';
      position: absolute;
         z-index: -1;
         top: -24rem;
         left: -2.5rem;
         

      height: 53rem;
      width: 21rem;

      background: url(../../src/images/card.svg) no-repeat center/cover;
    }
  }
`;

export const Card = styled.div`
 
`