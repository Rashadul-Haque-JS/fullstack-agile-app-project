
import React from 'react';
import logo from '../../../assets/images/st_blue.png';
import { Link } from 'react-router-dom';
import './pnf.scss';

const PageNotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-around align-items-center pnf  ">
      <div className='mt-5'>
        <h1 className="text-center text-danger font-weight-bolder">404</h1>
        <h2 className="h5">Page not found</h2>
      </div>

      <div className=" d-flex flex-column justify-content-around align-items-center pnf-logo">
        <Link to="/home" className="mb-3 ">
          Back To Home
        </Link>
        <img  className="rounded" src={logo} alt="logo" />
      </div>
      <div></div>
    </div>
  );
};

export default PageNotFound;
