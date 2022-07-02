import React from 'react';
import AvatarPhoto from './styles';

interface props {
  image: string
}

export default function Avatar({ image }: props){
  return (
    <AvatarPhoto>
      <span>
          <img src="./src/images/logo.svg" alt="Selo Rockeseat" />
      </span>
      <img id="userImg" src={image} alt="Imagem pessoal" />
    </AvatarPhoto>
  );
}