import SwipeableTemporaryDrawer from './drawer';
import { useLocation, useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { businessLogout,userLogout, removeHeaderToken } from '../../api/api';
import { removeCookies } from '@repo-hubs/smart-tasks-ui';
import { logOutBusiness } from '../features/business/businessAuthSlicer';
import { logOutUser } from '../features/user/userAuthSlicer';
import { removeTickets } from '../features/tickets/ticketsSlicer';
import toast from "react-hot-toast";

const Navbar = () => {
  const isBLoged = useSelector((state: RootState) => state.business.isBLoged);

  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  const navigate = useNavigate()
  const handleLogout = async () => {
    removeCookies();
    try {
      if(isBLoged){
        const res = await businessLogout();
      removeHeaderToken();
      dispatch(logOutBusiness());
      dispatch(removeTickets())
      // navigate('/')
      toast.success(res.data.message);
      }else{
        const res = await userLogout();
      removeHeaderToken();
      dispatch(logOutUser());
      dispatch(removeTickets())
      // navigate('/')
      toast.success(res.data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (pathname === '/login') {
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
