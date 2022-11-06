import SwipeableTemporaryDrawer from './drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { businessLogout, removeHeaderToken } from '../../api/api';
import { removeCookies } from '@repo-hubs/smart-tasks-ui';
import { logOutBusiness } from '../features/business/businessAuthSlicer';

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  

  const navigate = useNavigate()
  const handleLogout = async () => {
    removeCookies();
    try {
      const res = await businessLogout();
      removeHeaderToken();
      dispatch(logOutBusiness());
      alert(res.data.message);
      navigate('/')
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (pathname === '/') {
    return <div></div>;
  } else {
    return (
      <div className="col-md-12 p-2 navbar text-light d-flex justify-content-between align-items-center">
        <div className="menu">
          <SwipeableTemporaryDrawer />
        </div>
        <h1 className='h5 text-capitalize'>{pathname.split('/')[1]}</h1>
        <div>
          <button onClick={handleLogout}>Signout</button>
        </div>
      </div>
    );
  }
};

export default Navbar;
