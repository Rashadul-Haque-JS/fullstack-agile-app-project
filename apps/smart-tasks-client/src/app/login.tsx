import logo from '../assets/images/st-white.png';
import React, { useState } from 'react';
import { businessLogin, saveHeaderToken } from '../api/api';

export function NxWelcome({ title }: { title: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelLogin = async (event: any) => {
    event.preventDefault();
    try {
      const res = await businessLogin(email, password);
      saveHeaderToken(res.data.token);
      console.log(res);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
      
    }
    h1,
    h2,
    p,
    pre {
      margin: 0;
    }
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }
    h1,
    h2 {
      font-size: inherit;
      font-weight: inherit;
    }

    #welcome {
      margin-top: 3.5rem;
      font-size: 1.5rem;
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1;
      text-align:center
    }
   
    #welcome span {
      font-size: 1.875rem;
      font-weight: 300;
      line-height: 2.25rem;
      margin-bottom: 0.5rem;
    }
    #hero {
      align-items: center;
      background-color: hsla(214, 62%, 21%, 1);
      border: none;
      box-sizing: border-box;
      color: rgba(55, 65, 81, 1);
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 3rem;
      margin-bottom: 2rem;
    }
    #hero .text-container {
      color: rgba(255, 255, 255, 1);
      padding: 3rem 2rem;
    }
    
    
          `,
        }}
      />
      <div className="wrapper row justify-content-center align-items-center mx-1 ">
        <h1 id="welcome">
          Hello, Welcome <span>👋</span>{' '}
        </h1>
        <div className=" col-md-4">
          <div id="hero" className="rounded">
            <div className="d-flex justify-content-center align-items-center col-md-12">
              <img src={logo} alt="Site logo" />
            </div>
            <div className="text-container col-md-12">
              <h1 className="text-center h-4 bg-light text-dark p-2 rounded">
                Login
              </h1>
              <div className="col-md-12 mt-3 rounded">
                <div className=" d-flex justify-content-center align-items-center mb-2">
                  <div>
                    <input type="radio" id="business" value="Admin" />
                    <label className="mx-1">Business</label>
                  </div>
                  <div>
                    <input
                      className="mx-1"
                      type="radio"
                      id="business"
                      value="Admin"
                    />
                    <label>User</label>
                  </div>
                </div>
                <form
                  className="form-controll w-100 bg-light p-2 rounded"
                  onSubmit={handelLogin}
                >
                  <fieldset className="form-cotroll form-group mt-2">
                    <input
                      className="w-100"
                      type="text"
                      name="email"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-cotroll form-group my-2 ">
                    <input
                      className="w-100"
                      type="text"
                      name="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </fieldset>
                  <button className="btn btn-sm btn-dark text-light mt-2">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
