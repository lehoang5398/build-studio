import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';

import PropTypes from 'prop-types';

function SignIn({ handleCloseSignIn }) {
  const [isSignUp, setSignUp] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    if (handleCloseSignIn) {
      handleCloseSignIn();
    }
  };

  const openSignUp = () => {
    setSignUp(false);
  };
  const openSignIn = () => {
    setSignUp(true);
  };

  function handleLogin(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="commonPopUp acti sign">
      <div className="popOverlay"></div>
      <div className="popHolder-sign-in">
        <div className="popHolder-container">
          <div className="popup-header">
            <div className="close-Popup">
              <button onClick={handleClose} className="btn-close">
                <IoMdClose className="icon-close" />
              </button>
            </div>
          </div>
          {isSignUp ? (
            <div className="sign-in">
              <h3 className="title-sign-in">SIGN IN</h3>
              <form
                className="form-sign-in"
                onSubmit={handleSubmit(handleLogin)}
              >
                <label className="sign-title">
                  Email:
                  <input
                    className="input-sign-in"
                    type="text"
                    name="email"
                    {...register('email', { required: 'Please enter email!' })}
                  />
                </label>
                <span>{errors.email && errors.email.message}</span>
                <label className="sign-title">
                  Password:
                  <input
                    className="input-sign-in"
                    type="password"
                    name="password"
                    {...register('password', {
                      required: 'Please enter password!',
                    })}
                  />
                </label>
                <span>{errors.password && errors.password.message}</span>
                <button className="btn btn-sign-in" type="submit">
                  Sign In
                </button>
              </form>
              <div className="footer-sign-in">
                "Don't have an account?"
                <span onClick={openSignUp}>Sign Up</span>
              </div>
            </div>
          ) : (
            <div className="sign-in">
              <h3 className="title-sign-in">SIGN UP</h3>
              <form className="form-sign-in">
                <label className="sign-title">
                  Name:
                  <input className="input-sign-in" type="text" name="name" />
                </label>
                <label className="sign-title">
                  Email:
                  <input className="input-sign-in" type="text" name="name" />
                </label>
                <label className="sign-title">
                  Password:
                  <input className="input-sign-in" type="text" name="name" />
                </label>
                <button className="btn btn-sign-in" type="submit">
                  Sign Up
                </button>
              </form>
              <div className="footer-sign-in">
                "Don't have an account?"
                <span onClick={openSignIn}>Sign In</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  handleCloseSignIn: PropTypes.func,
};

export default SignIn;
