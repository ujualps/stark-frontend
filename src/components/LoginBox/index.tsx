import * as React from "react";
import "./styles.css";
import logo from "../../logo.jpg";
import axios from "axios";

interface loginPageValues {
  loginSignup: number;
  setUser: (id: number) => void;
  setLoginSignup: (status: number) => void;
}

export const LoginBox = (props: loginPageValues) => {
  const [susername, setUsername] = React.useState("");
  const [semail, setEmail] = React.useState("");
  const [sdesignation, setDesignation] = React.useState("");
  const [sdob, setDob] = React.useState("");
  const [spassword, setPassword] = React.useState("");
  const [srepeatPassword, setRepeatPassword] = React.useState("");
  const [validateEmail, setValidateEmail] = React.useState("");
  const [validateUsername, setValidateUsername] = React.useState("");
  const [validateDesignation, setValidateDesignation] = React.useState("");
  const [validatePassword, setValidatePassword] = React.useState("");
  const [validatePasswordMatch, setValidatePasswordMatch] = React.useState("");
  const [validateDob, setValidateDob] = React.useState("");

  const handleSignUpClick = () => {
    if (!/[a-zA-Z ]{4}[a-zA-Z ]*$/.test(susername)) {
      setValidateUsername("Invalid Username");
      return;
    } else setValidateUsername("");
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(semail)) {
      setValidateEmail("Invalid Email");
      return;
    } else setValidateEmail("");
    if (!/^[a-zA-Z][a-zA-Z ]*$/.test(sdesignation)) {
      setValidateDesignation("Invalid Designation");
      return;
    } else setValidateDesignation("");
    if (
      !/^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)\d{4}$/.test(sdob)
    ) {
      setValidateDob("Invalid DOB");
      return;
    } else setValidateDob("");
    if (!/^.{8}.*$/.test(spassword)) {
      setValidatePassword("Password must contain minimum 8 characters");
      return;
    } else setValidatePassword("");
    if (spassword != srepeatPassword) {
      setValidatePasswordMatch("Password doesn't match");
      return;
    } else setValidatePasswordMatch("");
    axios
      .post("http://localhost:5000/users", {
        username: susername,
        email: semail,
        designation: sdesignation,
        dob: sdob,
        password: spassword
      })
      .then(function(response) {
        setUsername("");
        setEmail("");
        setDesignation("");
        setDob("");
        setPassword("");

        setValidateDesignation("");
        setValidateDob("");
        setValidateEmail("");
        setValidatePassword("");
        setValidateUsername("");

        props.setLoginSignup(0);
      })
      .catch(function(error) {});
  };

  const handleLoginClick = () => {
    axios
      .post("http://localhost:5000/login", {
        email: semail,
        password: spassword
      })
      .then(function(response) {
        props.setUser(response.data.id);
        console.log(response.data.id);
      });
  };

  if (props.loginSignup === 0) {
    return (
      <section className="LoginBoxSection" data-testid="loginbox">
        <img className="LoginBoxSectionImg" src={logo} alt="LOGO" />
        <input
          className="LoginBoxSectionInput"
          placeholder="Email"
          type="text"
          value={semail}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="LoginBoxSectionInput"
          placeholder="Password"
          type="password"
          value={spassword}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="RowSpaceBetween">
          <button className="SigninButton" onClick={() => handleLoginClick()}>
            Login
          </button>
          <p className="LoginBoxP">
            or{" "}
            <a onClick={() => props.setLoginSignup(1)} className="LoginBoxA">
              SignUp
            </a>{" "}
            instead?
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="LoginBoxSection" data-testid="loginbox">
        <img className="LoginBoxSectionImg" src={logo} alt="LOGO" />
        <input
          className="LoginBoxSectionInput"
          value={susername}
          placeholder="Full Name"
          id="username"
          type="text"
          onChange={e => setUsername(e.target.value)}
        />
        <li className="errorMsg">{validateUsername}</li>
        <input
          className="LoginBoxSectionInput"
          value={semail}
          placeholder="Email"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />
        <li className="errorMsg">{validateEmail}</li>
        <input
          className="LoginBoxSectionInput"
          value={sdesignation}
          placeholder="Designation"
          type="text"
          onChange={e => setDesignation(e.target.value)}
        />
        <li className="errorMsg">{validateDesignation}</li>
        <input
          className="LoginBoxSectionInput"
          value={sdob}
          placeholder="Date of Birth (DD-MM-YYYY)"
          type="text"
          onChange={e => setDob(e.target.value)}
        />
        <li className="errorMsg">{validateDob}</li>
        <input
          className="LoginBoxSectionInput"
          value={spassword}
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <li className="errorMsg">{validatePassword}</li>
        <input
          className="LoginBoxSectionInput"
          placeholder="Confirm Password"
          type="password"
          value={srepeatPassword}
          onChange={e => setRepeatPassword(e.target.value)}
        />
        <li className="errorMsg">{validatePasswordMatch}</li>
        <div className="RowSpaceBetween">
          <button className="SigninButton" onClick={() => handleSignUpClick()}>
            Sign Up
          </button>
          <p className="LoginBoxP">
            or{" "}
            <a onClick={() => props.setLoginSignup(0)} className="LoginBoxA">
              Login
            </a>{" "}
            instead?
          </p>
        </div>
      </section>
    );
  }
};
