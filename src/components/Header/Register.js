import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().required('First Name should be required please !'),
  email: yup.string().email().required('Please enter your email !'),
  password: yup
    .string()
    .min(8)
    .max(15)
    .required('Please enter your password !')
    .matches(
      '(?=.*[0-9])(?=.*?[A-Z])',
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case CharacterPassword should include at least one uppercase, one numeric value !'
    ),
  passwordcfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

function Register({ openSignIn }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  function handleRegister(data) {
    console.log(data);
    reset();
  }

  const handleSignIn = () => {
    if (openSignIn) {
      openSignIn();
    }
  };

  return (
    <div className="sign-in">
      <h3 className="title-sign-in">SIGN UP</h3>
      <form className="form-sign-in" onSubmit={handleSubmit(handleRegister)}>
        <label className="sign-title">
          Name:
          <input
            className="input-sign-in mt-3"
            type="name"
            name="name"
            placeholder="Enter your name..."
            {...register('name')}
          />
        </label>
        <p className="my-4 text-red-500">
          {errors.name && errors.name.message}
        </p>
        <label className="sign-title">
          Email:
          <input
            className="input-sign-in mt-3"
            type="email"
            name="email"
            placeholder="Enter your emai..."
            {...register('email')}
          />
          <p className="my-4 text-red-500">
            {errors.email && errors.email.message}
          </p>
        </label>
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
        <p className="my-4 text-red-500">
          {errors.password && errors.password.message}
        </p>
        <label className="sign-title">
          Repeat password:
          <input
            className="input-sign-in mt-3"
            type="password"
            name="passwordcfirm"
            placeholder="Enter your Repeat password..."
            {...register('passwordcfirm')}
          />
        </label>
        <p className="my-4 text-red-500">
          {errors.passwordcfirm && errors.passwordcfirm.message}
        </p>
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

Register.propTypes = {};

export default Register;
