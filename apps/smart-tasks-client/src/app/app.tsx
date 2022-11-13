// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles.scss';
import Login from './pages/login';
import { Toaster } from 'react-hot-toast';
import { PrivateRoute } from './PrivateRoute';
import PageNotFound from './pages/page404.tsx/page404';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import Member from './pages/users/userProfile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  loginBusiness,
  logOutBusiness,
} from './features/business/businessSlicer';
import { saveHeaderToken } from '../api/api';
import { getCookies } from '@repo-hubs/smart-tasks-ui';

const App = () => {
  const dispatch = useDispatch();
  const token = getCookies('BTTP');

  useEffect(() => {
    if (token) {
      saveHeaderToken(token);
      dispatch(loginBusiness());
    } else {
      dispatch(logOutBusiness());
    }
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/member" element={<Member />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />{' '}
    </div>
  );
};

export default App;
// testing commit
