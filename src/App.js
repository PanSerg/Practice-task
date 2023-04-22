import { Routes, Route } from 'react-router-dom';
import Layout from './components/Header/SharedLayout/Layout/Layout';
import TweetPage from './pages/TweetPage/TweetPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TweetPage /> } />
      </Route>
    </Routes>
  );
};

export default App;
