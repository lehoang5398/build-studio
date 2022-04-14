import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function LoginForm ({ openSignUp }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const handleSignUp = () => {
    if (openSignUp) {
      openSignUp();
    }
  };

  function handleLogin(data) {
    console.log(data);
  }

  return (
    <div className="sign-in">
      <h3 className="title-sign-in">SIGN IN</h3>
      <form className="form-sign-in" onSubmit={handleSubmit(handleLogin)}>
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
        <span onClick={handleSignUp}>Sign Up</span>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  openSignUp:PropTypes.func
};

export default LoginForm;
