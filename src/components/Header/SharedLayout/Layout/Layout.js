import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <header>
          <NavLink>Home Page</NavLink>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
};

export default Layout;