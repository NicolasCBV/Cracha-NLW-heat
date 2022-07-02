import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10%;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 3%;
  justify-content: center;

  li {
    border: 0px solid var(--background-hover);
    img{
      border: 0px solid var(--background-hover);
      transition: border-width;
    }
    img:hover{
      border-width: 1px;
    }
  }

`