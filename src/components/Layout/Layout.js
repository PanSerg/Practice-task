import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LoadingPage } from "../LoadingPage/LoadingPage";
import { Wrapper, Header } from "./Layout.styled";


const Layout = () => {
    return (
      <>
        <Wrapper>
          <Header>
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/users">Users</NavLink>
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