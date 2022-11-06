import SwipeableTemporaryDrawer from './drawer';
import { useLocation } from 'react-router-dom';
import { businessLogout, removeHeaderToken } from '../../api/api';
import { removeCookies } from '@repo-hubs/smart-tasks-ui';

const Navbar = () => {
  const { pathname } = useLocation();

  const handleLogout = async () => {
    try {
      const res = await businessLogout();
      removeCookies();
      removeHeaderToken();
      alert(res.data.message);
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
