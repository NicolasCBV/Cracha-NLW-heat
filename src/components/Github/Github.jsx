import React, { useEffect, useState } from 'react'

import Config from '../../config.json';

import TextContent from './styles'; 


export default function Github(){
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [link, setLink] = useState('');

  // /*===========Get API github==================*/
  if(Config.GithubAPI){
    document.title = `NLW-heat - ${Config.GithubAPI}`;
    const url = `https://api.github.com/users/${Config.GithubAPI}`
    
    useEffect(()=>{
      setLink(`https://github.com/${Config.GithubAPI}`);
      fetch(url).then((res)=>res.json()).then(({name, bio})=>{
        setName(name);
        setBio(bio);
      });
    },[])
  }else{
    useEffect(()=>{
      document.title = `NLW-heat - ${Config.AvatarConfig.name}`;
      setName(Config.AvatarConfig.name);
      setBio(Config.AvatarConfig.bio);
    },[])
  }
  // /*===========================================*/

  return(
    <TextContent>
      <h1 id="nameId">{name}</h1>
            {Config.GithubAPI && (
              <>
                <a id="userGitHub" href={link} target="_blank">
                  <img src="../src/images/github.svg" alt="github" />
                    <span id="userLogin">{Config.GithubAPI}</ span>
                </a>
              </>
            )}
      <p id="userBio">{bio}</p>
    </TextContent>
  )
}