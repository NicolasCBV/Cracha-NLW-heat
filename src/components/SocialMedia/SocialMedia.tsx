import {List} from './styles';
import config from '../../config.json';

export default function SocialMedia(){
  return(
    <List>
      {
        Object.keys(config.SocialMedias).map((social, index)=> {
          const socialMedia = social;
          return (
            <li key={index} className={socialMedia}>
              <a href={`https://www.${socialMedia}.com/${socialMedia}`} target="_blank">
              <img id="icon" src={`./src/images/${socialMedia}.svg`} alt={`icon of ${socialMedia}`} />
              </a>
            </li>
          )})
      }
    </List>
  )
}
