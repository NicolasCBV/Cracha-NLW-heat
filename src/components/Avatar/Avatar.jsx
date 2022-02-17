import React from 'react';
import logo from '../../images/logo.svg';
import AvatarPhoto from './styles';

export default function Avatar(props){
  return (
    <AvatarPhoto>
      <span>
          <img src={logo} alt="Selo Rockeseat" />
      </span>
      <img id="userImg" src={props.image} alt="Imagem pessoal" />
    </AvatarPhoto>
  );
}