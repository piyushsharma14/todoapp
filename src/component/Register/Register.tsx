import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import "../style/app.css";
import firebase from "../Firebase/firebase_config";
import useRegisterAPI from "../API/RegisterAPI";
import * as CryptoJS from "crypto-js";

const Register = () => {
  const List: any = useRegisterAPI();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, cSetPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [complete, setcomplete] = useState<boolean>(false);
  const [error, seterror] = useState<string | null>("");
  const history = useHistory();

  function getEmail(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setEmail(event.target.value);
    seterror(null);
  }
  function getPassword(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPassword(event.target.value);
    seterror(null);
  }
  function getCPassword(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    cSetPassword(event.target.value);
    seterror(null);
  }
  function getCity(event: { target: { value: React.SetStateAction<string> } }) {
    setCity(event.target.value);
    seterror(null);
  }
  function getName(event: { target: { value: React.SetStateAction<string> } }) {
    setName(event.target.value);
    seterror(null);
  }
  function getState(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setState(event.target.value);
    seterror(null);
  }
  function getPhone(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setPhone(event.target.value);
    seterror(null);
  }

  function getCountry(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setCountry(event.target.value);
    seterror(null);
  }
  const handle = (event: any) => {
    event.preventDefault();
    let pass = true;

    List.map((item: { email: any }) => {
      if (String(item.email) === email) {
        pass = false;
        return seterror("User already exist!");
      } else {
        return 0;
      }
    });
    if (pass === true) {
      if (password !== cpassword) {
        seterror("Password dose not match");
      } else {
        const todoref = firebase.database().ref("User");
        var encrypted = CryptoJS.AES.encrypt(password, "Secret Passphrase");
        const todo = {
          Name: name,
          email: email,
          password: encrypted.toString(),
          City: city,
          State: state,
          Country: country,
          Phone: phone,
          Imageurl: "https://www.computerhope.com/jargon/g/guest-user.jpg",
        };
        todoref.push(todo);
        setcomplete(true);
        setEmail("");
        setPassword("");
        cSetPassword("");
        setCity("");
        setCountry("");
        setName("");
        setPhone("");
        setState("");
        seterror("User created! Click on Login");
      }
    }
  };

  return (
    <div className="Registermain">
      <div className="Registeroverlay">
        <form onSubmit={handle}>
          <div className="Registerheading">
            <h2>Registration</h2>
          </div>
          <br />
          <div>
            <input
              className="Registerinput1"
              type="text"
              name="Name"
              placeholder=" Name"
              value={name}
              onChange={getName}
              required
            />
          </div>
          <br />
          <div>
            <input
              className="Registerinput2"
              type="email"
              name="email"
              placeholder="User E-mail"
              value={email}
              onChange={getEmail}
              required
            />
          </div>
          <br />
          <div>
            <input
              className="Registerinput3"
              type="password"
              name="password"
              placeholder=" Password"
              value={password}
              onChange={getPassword}
              required
            />
          </div>
          <br />
          <div>
            <input
              className="Registerinput4"
              type="password"
              name="cpassword"
              placeholder=" Confirm Password"
              value={cpassword}
              onChange={getCPassword}
              required
            />
          </div>
          <div>
            <input
              className="Registerinput5"
              type="text"
              name="city"
              value={city}
              placeholder=" City"
              onChange={getCity}
              required
            />
          </div>

          <div>
            <input
              className="Registerinput6"
              type="text"
              name="state"
              placeholder=" State"
              value={state}
              onChange={getState}
              required
            />
          </div>

          <div>
            <input
              className="Registerinput7"
              type="text"
              name="country"
              value={country}
              placeholder=" Country"
              onChange={getCountry}
              required
            />
          </div>

          <div>
            <input
              className="Registerinput8"
              type="number"
              name="phone"
              value={phone}
              placeholder=" Phone Number"
              onChange={getPhone}
              required
            />
          </div>

          <div className="Registerbuttondiv">
            {complete ? (
              () => {
                history.push("/todoist");
              }
            ) : (
              <button className="Registerbutton" type="submit">
                Signup
              </button>
            )}
            <button
              type="button"
              className="Registerloginbutton"
              onClick={() => {
                history.push("/todoist");
              }}
            >
              Login
            </button>
          </div>
          {complete ? (
            <div className="Errorkdiv1">
              <h3 className="Errorheading1">{error}</h3>
            </div>
          ) : (
            <div className="Errorkdiv">
              <h3 className="Errorheading">{error}</h3>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default withRouter(Register);
