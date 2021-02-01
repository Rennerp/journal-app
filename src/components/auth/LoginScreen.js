import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleLogin,
  startLoginWithEmailPassword,
} from "../../actions/auth";

import { setError, removeError } from "../../actions/ui";
import validator from "validator";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { msgError, loading } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    email: "rennerp@gmail.com",
    password: "123456",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginWithEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password.length < 5) {
      dispatch(setError("Password should be at least 6 characters long"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__tittle">Login</h3>
      <form
        onSubmit={handleLogin}
        className="animate__animated animate__fadeIn animate__fast"
      >
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <label>
          <input
            type="text"
            name="email"
            className="auth__input"
            value={email}
            onChange={handleInputChange}
          />
          <div className="label-text">Email</div>
        </label>

        <label>
          <input
            type="password"
            name="password"
            className="auth__input"
            required={true}
            value={password}
            onChange={handleInputChange}
          />
          <div className="label-text">Password</div>
        </label>

        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login With Social Networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link className="link" to="/auth/register">
          Create an account
        </Link>
      </form>
    </>
  );
};
