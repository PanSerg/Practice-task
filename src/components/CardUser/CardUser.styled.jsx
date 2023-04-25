import styled from "styled-components";

export const Container = styled.div`
    width: 380px;
    height: 460px;
    position: relative;
    text-align: center;
    background: linear-gradient(115deg, #471ca9 -1%, #5736a3 54%, #4b2a99 79%);
    box-shadow: -3px 7px 21px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
`;

export const ImageQuestion = styled.img`
    margin: 28px 36px 14px;
`; 

export const Logo = styled.img`
    top: 20px;
    left: 20px;
    position: absolute;
`;

export const Divider = styled.div`
    width: 380px;
    height: 8px;
    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
    inset 0px -1.71846px 3.43693px #AE7BE3, 
    inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const CircleAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 80px;
    height: 80px;
    left: 150px;
    top: 178px;
    background: #EBD8FF;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
    border-radius: 50%;
`;

export const BgAvatar = styled.div`
    border-radius: 50%;
    width: 62px;
    height: 62px;
    background-color: #5736a3;
`;

export const TweetData = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    margin-top: 52px;
    margin-bottom: 26px;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #EBD8FF;
`;

export const FollowBtn = styled.button`
    position: absolute;
    width: 196px;
    height: 50px;
    left: 92px;
    top: 374px;
    margin-top: 10px;

    background: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
    border-radius: 10.3108px;

    font-family: 'Montserrat'; 
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #373737;

    &:hover,
    &.active {
    background: #5CD3A8;
  }
`;