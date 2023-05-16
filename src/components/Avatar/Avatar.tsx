import AvatarPhoto from './styles';

interface props {
  image: string
}

export default function Avatar({ image }: props){
  return (
    <AvatarPhoto>
      <span>
          <img src="/images/logo.svg" alt="Rockeseat icon" />
      </span>
      <img id="userImg" src={image} alt="Avatar" />
    </AvatarPhoto>
  );
}
