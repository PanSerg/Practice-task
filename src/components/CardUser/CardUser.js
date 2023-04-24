import { Container, Divider, ImageQuestion, Logo, CircleAvatar, BgAvatar } from './CardUser.styled';

import ImageQu from '../Images/picture.png';
import logo from '../Images/Logo.png';

export const CardUser = ({ user }) => {
  const { user: userName, followers, tweets, avatar } = user;
  return (
    <Container>
      <div>
        <ImageQuestion src={ImageQu} alt="picture" />
        <Logo src={logo} alt="logo GoIT" />
        <Divider />
        <CircleAvatar>
          <BgAvatar>
            <img width="62px" height="62px" src={avatar} alt={userName} />
          </BgAvatar>
        </CircleAvatar>
      </div>
      <ul>{tweets}</ul>
      <ul>{followers}</ul>
      <button type="button">follow</button>
    </Container>
  );
};
