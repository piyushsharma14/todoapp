import { RiEdit2Fill, RiUpload2Line, RiDeleteBack2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useState } from "react";
import "../style/app.css";
import firebase, { storage } from "../Firebase/firebase_config";
import React from "react";
import { Redirect } from "react-router";

const Details = () => {
  const Id = JSON.parse(Object(window.localStorage.getItem("Info"))).id;
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [editButton, setEditButton] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);
  const [upload, setUpload] = useState<boolean>(false);
  const mystate = useSelector((state: any) => state.Fetch);


  if (!window.localStorage.getItem("Info")) {
    <Redirect to="/" />;
  }


  const editProfile = () => {
    setEditButton(true);
    setEmail(mystate[0].email);
    setName(mystate[0].Name);
    setCity(mystate[0].City);
    setCountry(mystate[0].Country);
    setState(mystate[0].State);
    setPhone(mystate[0].Phone);

  };
  const saveProfile = () => {
    const Userref = firebase.database().ref("User");
    Userref.child(Id).update({
      Country: country,
      email: email,
      City: city,
      Name: name,
      State: state,
      Phone: phone,
    })
    setEditButton(false);
    };

  const onImageChange = (e: any) => {
    const reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onload = () => {
        if (reader.readyState === 2) {
          
          setImage(file);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setUpload(true);
    } else {
      setImage(null);
    }
  };
  const removeImage = () => {
    const Userref = firebase.database().ref("User");
    Userref.child(Id).update({
      Imageurl: "https://www.computerhope.com/jargon/g/guest-user.jpg",
    });
  };
  const uploadToFirebase = () => {
    if (image) {
      const storageRef = storage.ref();
      const imageRef = storageRef.child(image.name);
      imageRef.put(image);
      imageRef.getDownloadURL().then((url) => {
        alert("Image uploaded successfully to Firebase.");
        const Userref = firebase.database().ref("User");
        Userref.child(Id).update({
          Imageurl: url,
        });
        setUpload(false);
      });
    } else {
      alert("Please upload an image first.");

      setUpload(false);
    }
  };
  return (
    <>
      {mystate ? (
        <div className="Detailsdiv">
          <div className="Deatilsimage">
            <div>
              <img
                src={mystate[0].Imageurl}
                alt="UserImage"
                width="170"
                height="170"
              />
              <div>
                <label title="Upload" htmlFor="image">
                  <span>
                    <RiUpload2Line />
                  </span>
                </label>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    onImageChange(e);
                  }}
                />

                {upload ? (
                  <button className="Uploadbutton" onClick={uploadToFirebase}>
                    Upload
                  </button>
                ) : null}

                {!upload ? (
                  <button
                    className="Uploadbutton"
                    title="Remove"
                    onClick={removeImage}
                  >
                    <RiDeleteBack2Fill />
                  </button>
                ) : null}
              </div>
            </div>
            <div className="Ratingheading">
              <h5>YOUR RATING</h5>
              <h5>ACTIVITY</h5>
            </div>
            <div className="Ratingvalue">
              <h5> 54%</h5>
              <h5>93%</h5>
            </div>
          </div>
          <div>
            <div className="Detailsname">
              {editButton ? (
                <div>
                    <input
                      className="Nameinput"
                      type="text"
                      value={name}
                      onChange={e=>setName(e.target.value)}
                      required
                    />
                </div>
              ) : (
                <h3 style={{ marginLeft: "20px" }}> {mystate[0].Name}</h3>
              )}

              {editButton ? (
                <button onClick={saveProfile}>
                  <span>
                    <RiEdit2Fill />
                  </span>
                  Save
                </button>
              ) : (
                <button onClick={editProfile}>
                  <span>
                    <RiEdit2Fill />
                  </span>
                  EDIT
                </button>
              )}
            </div>
            <h5 className="Namedetails">
              {mystate[0].City}, {mystate[0].State}
            </h5>

            <div className="Details">
              <div style={{ marginTop: "13px" }}>
                <h4>Email</h4>
                {editButton ? (
                  <div>
                      <input
                        className="Emailinput"
                        style={{ marginLeft: "35px" }}
                        type="email"
                        value={email}
                        onChange={e=>setCity(e.target.value)}
                        required
                      />
                  </div>
                ) : (
                  <h5 style={{ marginLeft: "35px" }}> {mystate[0].email}</h5>
                )}
              </div>

              <div>
                <h4>City</h4>
                {editButton ? (
                  <div>
                      <input
                        className="Cityinput"
                        style={{ marginLeft: "45px" }}
                        type="text"
                        value={city}
                        onChange={e=>setCity(e.target.value)}
                        required
                      />
                  </div>
                ) : (
                  <h5 style={{ marginLeft: "45px" }}> {mystate[0].City}</h5>
                )}
              </div>
              <div>
                <h4>State</h4>
                {editButton ? (
                  <div>
                      <input
                        className="Stateinput"
                        style={{ marginLeft: "37px" }}
                        type="text"
                        value={state}
                        onChange={e=>setState(e.target.value)}
                        required
                      />
                  </div>
                ) : (
                  <h5 style={{ marginLeft: "37px" }}> {mystate[0].State}</h5>
                )}
              </div>
              <div>
                <h4>Country</h4>
                {editButton ? (
                  <div>
                      <input
                        className="Countryinput"
                        style={{ marginLeft: "18px" }}
                        type="text"
                        value={country}
                        onChange={e=>setCountry(e.target.value)}
                        required
                      />
                  </div>
                ) : (
                  <h5 style={{ marginLeft: "18px" }}> {mystate[0].Country}</h5>
                )}
              </div>
              <div>
                <h4>Phone</h4>
                {editButton ? (
                  <div>
                      <input
                        className="Phoneinput"
                        style={{ marginLeft: "28px" }}
                        type="text"
                        value={phone}
                        onChange={e=>setPhone(e.target.value)}
                        required
                      />
                  </div>
                ) : (
                  <h5 style={{ marginLeft: "28px" }}> {mystate[0].Phone}</h5>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};
export default Details;
