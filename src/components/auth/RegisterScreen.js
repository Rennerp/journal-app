import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    name: "Renner",
    email: "rennerp@gmail.com",
    password: "123456",
    passwordconfirmed: "123456",
  });

  const { name, email, password, passwordconfirmed } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== passwordconfirmed || password.length < 5) {
      dispatch(
        setError("Password should be at least 6 characters long and match")
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__tittle">Register</h3>
      <form onSubmit={handleRegister}>
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
            type="text"
            name="name"
            className="auth__input"
            value={name}
            onChange={handleInputChange}
          />
          <div className="label-text">Name</div>
        </label>
        <label>
          <input
            type="password"
            name="password"
            className="auth__input"
            value={password}
            onChange={handleInputChange}
          />
          <div className="label-text">Password</div>
        </label>
        <label>
          <input
            type="password"
            name="passwordconfirmed"
            className="auth__input"
            value={passwordconfirmed}
            onChange={handleInputChange}
          />
          <div className="label-text">Confirm Password</div>
        </label>
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>
        <Link className="link" to="/auth/login">
          Already registered? Sign In
        </Link>
      </form>
    </>
  );
};
