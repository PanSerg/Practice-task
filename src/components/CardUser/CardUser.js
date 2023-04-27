import {
  Card,
  Divider,
  ImageQuestion,
  Logo,
  CircleAvatar,
  BgAvatar,
  TweetData,
  FollowBtn,
} from './CardUser.styled';
import { useState } from 'react';

import ImageQu from '../Images/picture.png';
import logo from '../Images/Logo.png';
import avatar from '../Images/Hansel.png';

export const CardUser = ({ user, handleFollowingBtn }) => {
  const { user: userName, followers, tweets } = user;
  const [activeBtn, onActiveBtn] = useState();

  const handleActiveBtn = () => {
    onActiveBtn(!activeBtn);
    handleFollowingBtn(user);
  };
  return (
    
    <Card>

      <ImageQuestion src={ImageQu} alt="picture" />
      <Logo src={logo} alt="logo GoIT" />
      <Divider />
      <CircleAvatar>
        <BgAvatar>
          <img width="62px" height="62px" src={avatar} alt={userName} />
        </BgAvatar>
      </CircleAvatar>
      <TweetData>{tweets.toLocaleString('en-US')} tweets</TweetData>
      <TweetData>{followers.toLocaleString('en-US')} followers</TweetData>

          <FollowBtn type="button"
            $mode={activeBtn ? 'active' : ''}
              onClick={handleActiveBtn}
          >
              {activeBtn ? 'following' : 'follow'}
          </FollowBtn>
    </Card>
  );
};
