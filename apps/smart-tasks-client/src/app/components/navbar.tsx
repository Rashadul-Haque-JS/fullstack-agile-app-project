import SwipeableTemporaryDrawer from './drawer';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <div></div>;
  } else {
    return (
      <div className="col-md-12 p-2 bg-dark">
        <div className="menu">
          <SwipeableTemporaryDrawer />
        </div>
      </div>
    );
  }
};

export default Navbar;
