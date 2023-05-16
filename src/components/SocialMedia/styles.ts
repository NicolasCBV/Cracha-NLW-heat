import styled from "styled-components";

export const List = styled.ul`
  margin-top: 10%;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 3%;
  justify-content: center;

  a {
    display: grid;
    border: 0px solid var(--background-hover);
    background-color: rgb(50, 50, 56);
    padding: 0.8rem;
    place-items: center;
    img {
      width: 1.6rem;
      border: 0px solid var(--background-hover);
      transition: border-width;
    }
    &:hover {
      border-width: 1px;
      cursor: pointer;
    }
  }
`;
