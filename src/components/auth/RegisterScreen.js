import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__tittle">Register</h3>
      <form>
        <label>
          <input
            type="text"
            name="email"
            className="auth__input"
            required={true}
          />
          <div className="label-text">Email</div>
        </label>

        <label>
          <input
            type="text"
            name="name"
            className="auth__input"
            required={true}
          />
          <div className="label-text">Name</div>
        </label>

        <label>
          <input
            type="password"
            name="password"
            className="auth__input"
            required={true}
          />
          <div className="label-text">Password</div>
        </label>

        <label>
          <input
            type="password"
            name="passwordconfirmed"
            placeholder="Confirm Password"
            className="auth__input"
            required={true}
          />
          <div className="label-text">Confirm Password</div>
        </label>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          Login
        </button>

        <Link
          className="link"
          to="/auth/login">
          Already registered? Sign In
        </Link>
      </form>
    </>
  )
}
