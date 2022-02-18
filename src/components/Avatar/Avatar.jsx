import React from 'react';
import AvatarPhoto from './styles';

export default function Avatar(props){
  return (
    <AvatarPhoto>
      <span>
          <img src="../src/images/logo.svg" alt="Selo Rockeseat" />
      </span>
      <img id="userImg" src={props.image} alt="Imagem pessoal" />
    </AvatarPhoto>
  );
}