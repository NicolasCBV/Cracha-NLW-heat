import styled from "styled-components";

const AvatarPhoto = styled.div`
    width: 10rem;
    margin: 11.5rem auto 0;
    position: relative;

  span {
    position: absolute;
    top: -15px;
    z-index: 1;
  }

   &> img {
    width: 10rem;
    height: 11.5rem;
    object-fit: cover;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
`;

export default AvatarPhoto;