import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as CryptoJS from 'crypto-js';
import "../style/app.css";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
var button = false;
const User = () => {
  const [email, updateemail] = useState<string>("");
  const [password, updatepassword] = useState<string>("");
  const [error, seterror] = useState<String | null>(null);
  const [friendList, setfriendList] = useState<any[]>([]);
  const history = useHistory();

  useEffect(() => {
    button = false;
    const userFun = async () => {
      const responce = await fetch(
        "https://todo-list-64f41-default-rtdb.firebaseio.com/User.json"
      );
      const responseData = await responce.json();
      const userList = [];

      for (const key in responseData) {
        userList.push({
          id: key,
          email: String(responseData[key].email),
          password: String(responseData[key].password),
        });
      }
      setfriendList(userList);

    };
    userFun();
  }, []);

  function getValue1(event: any) {
    updateemail(event.target.value);
    seterror(null);
  }
  function getValue2(event: any) {
    updatepassword(event.target.value);
    seterror(null);
  }

  function handle(e: any) {
    e.preventDefault();
    friendList.map((friend) => {
      var decrypted = CryptoJS.AES.decrypt(friend.password, "Secret Passphrase");
      if (friend.email === email && decrypted.toString(CryptoJS.enc.Utf8) === password) {
        button = true;
        history.push("/status");
        window.localStorage.setItem("Info", JSON.stringify(friend));
      }
      return null;
    });
    if (!button) {
      seterror("Wrong User Id and Password");
    }
  }
  return (
  <div className="Loginmain">
    <div className="overlay">
      <form onSubmit={handle}>
          <div className="con">
            <header className="head-form">
              <h2>Log In</h2>
              <p>login here using your Email Id and password</p>
            </header>
          </div>
          <div className="field-set">
            <span className="input-item">
            <i style={{marginLeft:"15px"}}><RiUserLine/></i>
            </span>
            <input
              className="form-input"
              id="txt-input"
              type="email" placeholder="@Useremail"
              value={email}
              onChange={getValue1}
              required
            />

            <br />
            <span className="input-item" >
            <i style={{marginLeft:"15px"}}><RiLockPasswordLine/></i>
            </span>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              id="pwd"
              name="password"
              value={password}
              onChange={getValue2}
              required
            />
            <br />

            <button className="log-in" type="submit">
              Login
            </button>
          </div>
            <div className="other">
              <button className="btn submits sign-up log-in" onClick={()=>{history.push("/register")}}>
                  Register
              </button>
            </div>
            {button ? (
              <div></div>
            ) : (
              <div className="Errorkdiv">
                <h2 className="Errorheading">{error}</h2>
              </div>
            )}
        </form>
      </div>
    </div>
  );
};
export default User;
