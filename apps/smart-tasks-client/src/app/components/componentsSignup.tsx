import React, { useState } from 'react';
import { businessCreate } from '../../api/api';
import { saveHeaderToken } from '../../api/api';

const SignupComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handeleCreate = async (event: any) => {
    event.preventDefault();
    try {
      const data = { name, email, password };
      const res = await businessCreate(data);
      saveHeaderToken(res.data.token);
      alert(res.data.message);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="text-container col-md-12">
      <h1 className="text-center h-4 bg-primary text-dark p-2 rounded">Signup</h1>
      <div className="col-md-12 mt-3 rounded">
        <div className=" d-flex justify-content-center align-items-center mb-2">
          <div>
            <input type="radio" id="business" value="Admin" checked/>
            <label className="mx-1">Business</label>
          </div>
          <div>
            <input className="mx-1" type="radio" id="business" value="Admin" disabled/>
            <label>User</label>
          </div>
        </div>
        <form
          className="form-control w-100 bg-light p-2 rounded"
          onSubmit={handeleCreate}
        >
          <fieldset className="form-cotroll form-group mt-2">
            <input
              className="w-100"
              type="text"
              name="name"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="form-control form-group mt-2">
            <input
              className="w-100"
              type="text"
              name="email"
              placeholder="email"
              required
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button className="btn btn-sm btn-dark text-light mt-2">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
