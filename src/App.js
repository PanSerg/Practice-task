import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import TweetPage from './pages/TweetPage/TweetPage';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch()
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TweetPage /> } />
      </Route>
    </Routes>
  );
};

export default App;
