import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { login } from './action';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email().required('Please enter your email !'),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required('Please enter your password !')
    .matches(
      '(?=.*[0-9])(?=.*?[A-Z])',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case CharacterPassword should include at least one uppercase, one numeric value !',
    ),
});

function SignIn({ handleCloseSignIn }) {
  const [isSignUp, setSignUp] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

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
    dispatch(login(data));
    handleClose();
    reset();
  }

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
                    className="input-sign-in mt-3"
                    type="email"
                    name="email"
                    placeholder="Enter your email..."
                    {...register('email')}
                  />
                </label>
                <p className="my-4 text-red-500">{errors.email && errors.email.message}</p>
                <label className="sign-title">
                  Password:
                  <input
                    className="input-sign-in mt-3"
                    type="password"
                    name="password"
                    placeholder="Enter your password..."
                    {...register('password')}
                  />
                </label>
                <p className="my-4 text-red-500">{errors.password && errors.password.message}</p>
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
              {/* chỗ này tạo ra component Sign Up mới đúng nha */}
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
  dispatch: PropTypes.func,
};

export default SignIn;
