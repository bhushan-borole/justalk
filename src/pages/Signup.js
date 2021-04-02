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
        <h1 style={{ color: "#74808a" }}>
          Sign Up to
          <Link className="title ml-2" to="/justalk">Justalk</Link>
        </h1>
        <br/>
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
          {error ? <p className="text-danger">{error}</p> : null}
          <button className="btn btn-primary px-5" type="submit">Sign up</button>
        </div>
        <p style={{ color: "rgb(116, 128, 138)" }}>You can also sign up with any of these services</p>
        <button className="btn btn-danger mr-2" type="button" onClick={googleSignIn}>
          Sign up with Google
        </button>
        <button className="btn btn-secondary" type="button" onClick={githubSignIn}>
          Sign up with GitHub
        </button>
        <hr></hr>
        <p style={{ color: "rgb(116, 128, 138)" }}>Already have an account? <Link to="/justalk/login">Login</Link></p>
      </form>
    </div>
  )
}

export default SignUp;