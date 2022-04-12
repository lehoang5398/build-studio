import React from 'react';
import { IoMdClose } from 'react-icons/io';

import PropTypes from 'prop-types';

function SignIn({ handleCloseSignIn }) {
  const handleClose = () => {
    if (handleCloseSignIn) {
      handleCloseSignIn();
    }
  };

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
          <div className="sign-in">
            <h3 className='title-sign-in'>SIGN IN</h3>
            <form className="form-sign-in">
              <label className="sign-title">
                Email:
                <input className="input-sign-in" type="text" name="name" />
              </label>
              <label className="sign-title">
                Password:
                <input className="input-sign-in" type="text" name="name" />
              </label>
              <button className="btn btn-sign-in" type="submit">
                Sign In
              </button>
            </form>
            <div className='footer-sign-in'>
              "Don't have an account?"
              <span>
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  handleCloseSignIn: PropTypes.func,
};

export default SignIn;
