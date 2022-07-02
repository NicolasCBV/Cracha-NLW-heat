import styled from 'styled-components';

const TextContent = styled.div`
  --black: hsl(240, 6%, 13%);
  --gray: hsl(240, 9%, 89%);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  h1{
    color: var(--gray);
    font-size: 1.5rem;
    margin-top: 1.5rem;
  };

  a{
    color: var(--gray);
    text-decoration: none;
    margin-top: 0.25rem;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }

  p{
    color: var(--gray);
    margin-top: 14%;
  }
`;
export default TextContent;