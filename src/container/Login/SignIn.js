import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Register from './RegisterForm';
import LoginForm from './LoginForm';

function SignIn({ handleCloseSignIn }) {
  const [isSignUp, setSignUp] = useState(true);

  const {
    reset,
  } = useForm({});

  const handleClose = () => {
    if (handleCloseSignIn) {
      handleCloseSignIn();
    }
  };

  const openSignUp = () => {
    setSignUp(false);
    reset();
  };
  const openSignIn = () => {
    setSignUp(true);
    reset();
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
          {isSignUp ? (
            <LoginForm  openSignUp={openSignUp} handleClose={handleClose}/>
          ) : (
            <Register openSignIn={openSignIn}/>
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
