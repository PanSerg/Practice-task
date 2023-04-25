import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageStyled, PageMain } from "./TweetPage.styled";
import { CardUser } from "../../components/CardUser/CardUser";
import { fetchUsers, updateUser } from "../../service/serviceAPI";

const TweetPage = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [followingUsers, setFollowingUsers] = useState();
  const [filter, setFilter] = useState(true);
  const [isLoadMoreBtn, setIsLoadMoreBtn] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const userList = await fetchUsers(page);
        userList.length > 0
          ? setUsers(prev => [...prev, ...userList]) : setIsLoadMoreBtn(false);
      } catch (error) {
        console.log('error :>>', error);
        }
    }
    getUsers();
  }, [page]);

  const handleFollowingBtn = user => {
    const index = users.findIndex(({ id }) => user.id === id);
    const isFollowingUser = followingUsers.some(({ id }) => user.id === id);
    if (isFollowingUser) {
      users[index].followers -= 1;
      setFollowingUsers(followingUsers.filter(({ id }) => id !== user.id));
    } else {
      users[index].followers += 1;
      setFollowingUsers(prev => [...prev, user]);
    }
    updateFollowers(user);
  };

  async function updateFollowers(user) {
    try { 
      await updateUser(user);
    } catch (error) {
        console.log('error :>>', error);
    }
    updateFollowers(user);
  };

  const handleLoadMore = () => setPage(prev => prev + 1);

  // const filterChoice = e => setFilter(e.target.value);

  const filterUser = () => {
    const searchId = followingUsers.map(({ id }) => id);
    switch (filter) {
      case 'follow':
        return users.filter(({ id }) => !searchId.includes(id));
      case 'followings':
        return users.filter(({ id }) => searchId.includes(id));
      default:
        return users;
    }
  };

    return (
      <main>
        <PageStyled>
          <PageMain>
            <div to={backLinkHref}>Back</div>
            <span>
              Filter
            </span>
          </PageMain>
          <ul>
            {filterUser().map(user => (
              <li key={user.id}>
                <CardUser
                  user={user}
                  followingUsers={followingUsers}
                  handleFollowingBtn={handleFollowingBtn}
                ></CardUser>
              </li>
            ))}
          </ul>
          {isLoadMoreBtn && (
            <button type="button" onClick={handleLoadMore}>
              Load more
            </button>
          )}
        </PageStyled>
      </main>
    );
};

export default TweetPage;