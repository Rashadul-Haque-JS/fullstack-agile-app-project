import SwipeableTemporaryDrawer from './drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { businessLogout, removeHeaderToken } from '../../api/api';
import { removeCookies } from '@repo-hubs/smart-tasks-ui';
import { logOutBusiness } from '../features/business/businessAuthSlicer';
import toast from "react-hot-toast";

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
      navigate('/')
      toast.success(res.data.message);
    } catch (error: any) {
      toast.error(error.message);
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
        <h1 className='h6 text-capitalize'>{pathname.split('/')[1]}</h1>
        <div>
          <button className='btn btn-sm bg-none text-primary' onClick={handleLogout}>Signout</button>
        </div>
      </div>
    );
  }
};

export default Navbar;
