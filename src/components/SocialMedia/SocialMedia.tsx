import {List} from './styles';
import config from '../../config.json';

export default function SocialMedia(){
  return(
    <List>
      {
        config.SocialMedias.map((social, index)=> {
          const socialMedia = social;
          return (
            <li key={index}>
              <a href={socialMedia.link} target="_blank">
                <img
                  id="icon" 
                  src={socialMedia.imageURL} 
                  alt={socialMedia.alt} 
                />
              </a>
            </li>
          )})
      }
    </List>
  )
}
