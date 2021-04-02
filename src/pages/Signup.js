import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from '../helper/auth';

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      await signup(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  const githubSignIn = async (event) => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  }

  const googleSignIn = async (event) => {
    try {
      await signInWithGitHub();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div className="container">
      <form 
        className="mt-5 py-5 px-5"
        autoComplete="off"
        onSubmit={handleSubmit}>
        <h1>
          Sign Up to
          <Link className="title ml-2" to="/">Justalk</Link>
        </h1>
        <p className="lead">Fill in the form below to create an account.</p>
        <div className="form-group">
          <input 
            className="form-control"
            placeholder="Email" 
            name="email" 
            type="email" 
            onChange={e => setEmail(e.target.value)} 
            value={email}>
          </input>
        </div>
        <div className="form-group">
          <input 
            className="form-control"
            placeholder="Password" 
            name="password" 
            onChange={e => setPassword(e.target.value)} 
            value={password} 
            type="password">
          </input>
        </div>
        <div className="form-group">
          {error ? <p>{error}</p> : null}
          <button className="btn btn-primary px-5" type="submit">Sign up</button>
        </div>
        <p>You can also sign up with any of these services</p>
        <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
          Sign up with Google
        </button>
        <button className="btn btn-secondary" type="button" onClick={githubSignIn}>
          Sign up with GitHub
        </button>
        <hr></hr>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp;