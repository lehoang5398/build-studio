import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

function RegisterForm({ openSignIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = () => {
    if (openSignIn) {
      openSignIn();
    }
  };

  function handleSignUp(a) {
    console.log(a);
  }

  return (
    <div className="sign-in">
      <h3 className="title-sign-in">SIGN UP</h3>
      <form className="form-sign-in" onSubmit={handleSubmit(handleSignUp)}>
        <label className="sign-title">
          Name:
          <input
            className="input-sign-in"
            type="text"
            name="name"
            {...register('name', { required: 'Please enter name!' })}
          />
        </label>
        <span>{errors.name && errors.name.message}</span>
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
          Sign Up
        </button>
      </form>
      <div className="footer-sign-in">
        "Don't have an account?"
        <span onClick={handleSignIn}>Sign In</span>
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  openSignIn: PropTypes.func,
};

export default RegisterForm;
