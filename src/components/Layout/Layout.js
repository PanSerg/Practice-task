import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { Wrapper, Header, NavContainer, NavLinkCard } from "./Layout.styled";


const Layout = () => {
    return (
      <>
        <Wrapper>
          <Header>
            <NavContainer>
              <NavLinkCard to="/" end>Home Page</NavLinkCard>
              <NavLinkCard to="/users">Users</NavLinkCard>
            </NavContainer>
          </Header>
          <main>
            <Suspense fallback={<LoadingPage />}>
              <Outlet />
            </Suspense>
          </main>
        </Wrapper>
      </>
    );
};

export default Layout;