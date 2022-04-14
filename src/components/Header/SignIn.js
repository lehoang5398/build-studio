import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function SignIn({ handleCloseSignIn }) {
  const [isSignUp, setSignUp] = useState(true);
  const { reset } = useForm();

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
    reset();
    setSignUp(true);
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
            <LoginForm openSignUp={openSignUp} />
          ) : (
            <RegisterForm openSignIn={openSignIn} />
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
