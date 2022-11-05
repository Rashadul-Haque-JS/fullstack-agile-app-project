import logo from '../../assets/images/st-white.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginComponent from '../components/componentsLogin';
import SignupComponent from '../components/componentsSignup';
import { Helmet } from 'react-helmet';

export function NxLogin() {
  const [isSignup, setIsSignup] = useState<boolean>(false);

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
      padding-bottom: 2.5rem;
    }
    #hero .text-container {
      color: rgba(255, 255, 255, 1);
      padding: 3rem 1rem 0rem 1rem;
    }
    
    
          `,
        }}
      />
      <div className="wrapper row justify-content-center align-items-center mx-1 ">
        <Helmet>
          <title>Login</title>
          <meta name="Login" />
        </Helmet>
        <h1 id="welcome">
          Hello, Welcome <span>👋</span>{' '}
        </h1>
        <div className=" col-md-4">
          <div id="hero" className="rounded">
            <div className="d-flex justify-content-center align-items-center col-md-12">
              <img src={logo} alt="Site logo" />
            </div>
            {!isSignup && <LoginComponent />}
            {isSignup && <SignupComponent />}
            <div className="d-flex justify-content-between align-items-start my-3 mx-2">
              {!isSignup && (
                <button
                  className="btn btn-sm bg-none text-primary"
                  onClick={() => setIsSignup(true)}
                >
                  Signup
                </button>
              )}
              {!isSignup && (
                <Link className="p-0 mx-2" to="/reset-password">
                  Password?
                </Link>
              )}
              {isSignup && (
                <button
                  className="btn btn-sm bg-none text-primary"
                  onClick={() => setIsSignup(false)}
                >
                  To login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NxLogin;
