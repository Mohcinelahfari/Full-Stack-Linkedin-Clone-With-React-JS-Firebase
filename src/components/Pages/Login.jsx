import React from "react";
import { signInApi } from "../../redux/actions";
import { connect } from "react-redux";

function Login(props) {
  return (
    <div className="container-fluid p-3">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-white py-3 px-4 ">
        <a className="navbar-brand" href="/index.html">
          <img src="/images/login-logo.svg" alt="Logo" width="135" height="34" />
        </a>
        <div>
          <a
            href="#join"
            className="btn btn-outline-secondary me-3 rounded-4"
          >
            Join now
          </a>
          <a
            href="#signin"
            className="btn btn-primary text-white px-4 rounded-pill"
          >
            Sign in
          </a>
        </div>
      </nav>

      {/* Main Section */}
      <section className="d-flex flex-column flex-md-row align-items-center justify-content-between py-5 px-4">
        {/* Hero Section */}
        <div className="text-primary me-md-5">
          <h1 className="display-2 fw-light mb-4">
            Welcome to your professional community
          </h1>
          <button
          onClick={() => props.signIn()}
            className="btn btn-light w-80 py-3 rounded-pill shadow-sm d-flex align-items-center justify-content-center"
          >
            <img src="/images/google.svg" alt="Google" className="me-2" />
            Sign in with Google
          </button>
        </div>

        {/* Image Section */}
        <img
          src="/images/login-hero.svg"
          alt="Hero"
          className="img-fluid mt-4 mt-md-0"
          style={{ maxWidth: "500px" }}
        />
      </section>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user : state.userState.user 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn : () => dispatch(signInApi())
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Login);
