import { useLocation } from "react-router-dom";
import { PageStyled, PageMain } from "./TweetPage.styled";

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
        </PageStyled>
        <h3>Users</h3>
      </main>
    );
};

export default TweetPage;