import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { businessLogin } from '../../api/api';
import { saveHeaderToken } from '../../api/api';
import { useDispatch } from 'react-redux';
import {
  addBToken,
  addCrntBusiness,
} from '../features/business/businessAuthSlicer';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      const res = await businessLogin(email, password);
      dispatch(addCrntBusiness(res.data.authBusiness));
      dispatch(addBToken(res.data.token));
      saveHeaderToken(res.data.token);
      navigate('/home');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="text-container col-md-12">
      <h1 className="text-center h-4 bg-primary text-dark p-2 rounded">
        Login
      </h1>
      <div className="col-md-12 mt-3 rounded">
        <div className=" d-flex justify-content-center align-items-center mb-2">
          <div>
            <input type="radio" id="business" value="Admin" />
            <label className="mx-1">Business</label>
          </div>
          <div>
            <input className="mx-1" type="radio" id="business" value="Admin" />
            <label>User</label>
          </div>
        </div>
        <form
          className="form-control w-100 bg-light p-2 rounded"
          onSubmit={handleLogin}
        >
          <fieldset className="form-cotrol form-group mt-2">
            <input
              className="w-100"
              type="text"
              name="email"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="form-control form-group my-2 ">
            <input
              className="w-100"
              type="text"
              name="password"
              placeholder="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button className="btn btn-sm btn-dark text-light mt-2">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
