import { useLocation } from "react-router-dom";
import { PageStyled, PageMain } from "./TweetPage.styled";
import { CardUser } from "../../components/CardUser/CardUser";

const users = [
  {
    user: 'Elon Mask',
    avatar: require('../../components/Images/Hansel.png'),
    tweets: 888,
    followers: 100500,
    id: '1',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Keanu Reeves',
    tweets: 777,
    followers: 800300,
    id: '2',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Joe Biden',
    tweets: 333,
    followers: 1000001,
    id: '3',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Bill Gats',
    tweets: 1000,
    followers: 7777,
    id: '4',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Mark Zukerberg',
    tweets: 999,
    followers: 3003,
    id: '5',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Cristiano Ronaldo',
    tweets: 3000,
    followers: 900000,
    id: '6',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Dart Vader',
    tweets: 20,
    followers: 800,
    id: '7',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Luis Hamilton',
    tweets: 350,
    followers: 200005,
    id: '8',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Duen Jonson',
    tweets: 549,
    followers: 150000,
    id: '9',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Lionel Messi',
    tweets: 2054,
    followers: 400000,
    id: '10',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Jaison Stathem',
    tweets: 99,
    followers: 180053,
    id: '11',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Carim Benzema',
    tweets: 95,
    followers: 250756,
    id: '12',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Vin Dizel',
    tweets: 105,
    followers: 340987,
    id: '13',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Fernando Alonso',
    tweets: 78,
    followers: 125678,
    id: '14',
  },
  {
    avatar: require('../../components/Images/Hansel.png'),
    user: 'Mariush Lewandivski',
    tweets: 85,
    followers: 110975,
    id: '15',
  },
];

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
                <CardUser user={user}></CardUser>
              </li>
            ))}
          </ul>
        </PageStyled>
      </main>
    );
};

export default TweetPage;