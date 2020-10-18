import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: 'rekefa@gmail.com',
    password: '123456'
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(12345, 'Rennerp'));
  }

  return (
    <>
      <h3 className="auth__tittle">Login</h3>
      <form onSubmit={handleLogin}>
        <label>
          <input
            type="text"
            name="email"
            className="auth__input"
            required={true}
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
        >
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login With Social Networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
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
  )
}

