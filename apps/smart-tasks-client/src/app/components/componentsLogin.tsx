import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { businessLogin ,userLogin} from '../../api/api';
import { saveHeaderToken } from '../../api/api';
import { setCookies } from '@repo-hubs/smart-tasks-ui';
import { loginBusiness } from '../features/business/businessSlicer';
import { loginUser } from '../features/user/userSlicer';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('business');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event: any) => {
    event.preventDefault();
    try {
      if (type === 'business') {
        const res = await businessLogin(email, password);
        setCookies('BTIP', res.data.id);
        setCookies('BTTP', res.data.token);
        saveHeaderToken(res.data.token);
        dispatch(loginBusiness());
        navigate('/home');
      }else{
        const res = await userLogin(email, password);
      setCookies('UTIP', res.data.id);
      setCookies('UTTP', res.data.token);
      saveHeaderToken(res.data.token);
      dispatch(loginUser())
      navigate('/member');
      }
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
            <input
              type="radio"
              id="business"
              value="business"
              checked={type === 'business'}
              onChange={(e) => setType(e.target.value)}
            />
            <label className="mx-1">Business</label>
          </div>
          <div>
            <input
              className="mx-1"
              type="radio"
              id="business"
              value="member"
              checked={type === 'member'}
              onChange={(e) => setType(e.target.value)}
            />
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
