import React from 'react';
import styled from 'styled-components';


export const Box = styled.div`
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
  position: relative;
      z-index: 1;
      top: -3rem;

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

      background: url(/images/card.svg) no-repeat center/cover;
    }
  }
`;