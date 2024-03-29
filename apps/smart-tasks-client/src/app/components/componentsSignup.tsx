import React, { useState } from 'react';
import { businessCreate } from '../../api/api';
import { saveHeaderToken } from '../../api/api';

const SignupComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admin, setAdmin] = useState('');
  const [street, setStreet] = useState('');
  const [post, setPost] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handeleCreate = async (event: any) => {
    event.preventDefault();
    try {
      const data = { name, email, password,admin,street,post,city,country };
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
            <input type="radio" id="business" value="business"/>
            <label className="mx-1">Business</label>
          </div>
          <div>
            <input className="mx-1" type="radio" id="user" value="user" disabled/>
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
          <fieldset className="form-control form-group mt-2">
            <input
              className="w-100"
              type="text"
              name="admin"
              placeholder="admin name (optional)"
              required
              value={admin}
              onChange={(e) => setAdmin(e.target.value)}
            />
          </fieldset>
          
          <fieldset className="form-control form-group my-2 ">
            <input
              className="w-100"
              type="text"
              name="street"
              placeholder="street & holding number"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </fieldset>
          <fieldset className="form-control form-group my-2 ">
            <input
              className="w-100"
              type="text"
              name="post"
              placeholder="post number"
              required
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </fieldset>
          <fieldset className="form-control form-group my-2 ">
            <input
              className="w-100"
              type="text"
              name="city"
              placeholder="city"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </fieldset>
          <fieldset className="form-control form-group my-2 ">
            <input
              className="w-100"
              type="text"
              name="country"
              placeholder="country"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </fieldset>
          <button className="btn btn-sm btn-dark text-light mt-2">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
// test
