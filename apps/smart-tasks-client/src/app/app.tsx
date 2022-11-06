// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles.scss';
import Login from './pages/login';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home/home';
import PageNotFound from './pages/page404.tsx/page404';
import Navbar from './components/navbar';
import { getCookies } from '@repo-hubs/smart-tasks-ui';
import { saveHeaderToken } from '../api/api';
import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    const token = getCookies('BTTP');
    if (token) {
      saveHeaderToken(token);
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home/:businessId" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster />
    </div>
  );
};

export default App;
// testing commit
