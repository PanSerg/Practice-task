import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    min-height: 100vh;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    position: sticky;
    min-height: 48px;
    padding: 12px 24px;
    color: #FFFFFF;
    background-color: #0000CD;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    z-index: 1100;
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLinkCard = styled(NavLink)`
  padding 10px 25px;
  border: 1px solid #778899;
  border radius: 5px;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  color: #A9A9A9;
`;