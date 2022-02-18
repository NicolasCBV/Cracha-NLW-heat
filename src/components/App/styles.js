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

      #app{
        width: 100%;
        height: 100%;
      }

      html,
      body {
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
      
      body{
        background: url(../../src/images/mobile.svg) no-repeat center/cover;
        min-height: 812px;
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
  text-align: center;
  position: relative;
      z-index: 1;
      top: -3rem;
  word-break: break-all;

  color: var(--gray);
  @media (min-width: 630px) {
    &:before{
      content: '';
      position: absolute;
         z-index: -1;
         top: -11.5rem;
         left: -2.5rem;
         

      height: 50rem;
      width: 21rem;

      background: url(../../src/images/card.svg) no-repeat center/cover;
    }
  }
`;

export const Card = styled.div`
 
`