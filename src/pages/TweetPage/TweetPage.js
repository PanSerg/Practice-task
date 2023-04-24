import { useLocation } from "react-router-dom";
import { PageStyled, PageMain } from "./TweetPage.styled";
import { fetchUsers } from "../../redux/operations";

const users = [fetchUsers()];

const TweetPage = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';
    return (
      <main>
        <PageStyled>
          <PageMain>
            <div to={backLinkHref}>Back</div>
            <span>filter</span>
          </PageMain>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <div user={user}></div>
              </li>
            ))}
          </ul>
        </PageStyled>
      </main>
    );
};

export default TweetPage;