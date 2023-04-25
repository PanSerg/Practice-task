import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./pages/Home/Home'));
const TweetPage = lazy(() => import('./pages/TweetPage/TweetPage'));

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="users" element={<TweetPage />} />
        <Route path="*" element={<Home/>} />
      </Route>
    </Routes>
  );
};

export default App;
