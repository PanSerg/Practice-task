import styled from 'styled-components';

export const Button = styled.button`

    width: 196px;
    height: 50px;
    padding: 6px 30px 6px 15px;
    margin-top: 10px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border-width: 1px;
    border-color: var(--color-bg-light-btn);
    background: #5CD3A8;

    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
    line-height: 22px;

    cursor: pointer;
    &:hover {
    scale: 1.05;
  }
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
    cursor: pointer;
    &:hover {
    scale: 1.05;
  }
`;