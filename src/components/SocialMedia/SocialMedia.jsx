import React from 'react';

import {List} from './styles';
import config from '../../config.json';

export default function SocialMedia(){
  return(
    <List>
      {
        Object.keys(config.SocialMedias).map((social, index)=> {
          return (
            <li key={index} className={social}>
              <a href={`https://www.${social}.com/${config.SocialMedias[social]}`} target="_blank">
              <img id="icon" src={`../../images/${social}.svg`} alt={`icon of ${social}`} />
              </a>
            </li>
          )})
      }
    </List>
  )
}
