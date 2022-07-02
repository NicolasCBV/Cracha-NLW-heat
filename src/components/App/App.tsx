import Avatar from '../Avatar/Avatar';
import Github from '../Github/Github';
import SocialMedia from '../SocialMedia/SocialMedia';
import { Box } from './styles';

import Config from '../../config.json';


function App() {
  const url = (Config.GithubAPI)? `https://github.com/${Config.GithubAPI}.png` : Config.AvatarConfig.image
  
  return (
    <Box>
        <Avatar image={url}/>
        
        <Github/>

        <SocialMedia/>

    </Box>
  )
}

export default App
