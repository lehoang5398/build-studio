import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { signIn } from './action';

const schema = yup.object().shape({
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
});

function LoginForm({ openSignUp ,handleClose}) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const password = useRef({});
  password.current = watch('password', '');

  const handleSignUp = () => {
    if (openSignUp) {
      openSignUp();
    }
  };

  function handleLogin(data) {
    dispatch(signIn(data));
    handleClose();
    reset();
  }

  return (
    <div className="sign-in">
      <h3 className="title-sign-in">SIGN IN</h3>
      <form className="form-sign-in" onSubmit={handleSubmit(handleLogin)}>
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
        <p className="my-4 text-red-500">
          {errors.email && errors.email.message}
        </p>
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
  openSignUp: PropTypes.func,
  handleClose: PropTypes.func,
};

export default LoginForm;
