import React from 'react';

import Avatar from '../Avatar/Avatar.jsx';
import Github from '../Github/Github.jsx';
import SocialMedia from '../SocialMedia/SocialMedia.jsx';

import Styles, {Box} from './styles';

import Config from '../../config.json';


function App() {
  const url = (Config.GithubAPI)? `https://github.com/${Config.GithubAPI}.png` : Config.AvatarConfig.image
  
  return (
    <Box>
      <Styles/>

        <Avatar image={url}/>
        
        <Github/>

        <SocialMedia/>

    </Box>
  )
}

export default App
