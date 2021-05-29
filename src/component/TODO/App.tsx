import React, { useState } from "react";
import "../style/app.css";
import Input from "./Input";
import Button from "./button";
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";
import useLocalStorage from "../API/getFirebaseTODo";
import firebase from "../Firebase/firebase_config";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import Details from "../Profile/details";
import useDetailsAPI from "../API/DetailsAPI";


const App = () => {
  const [newInputData, setNewInputData] = useState<string>("");
  const [edititem, updateedititem] = useState<boolean>(true);
  const [editinputid, seteditinputid] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const detialsapi = useDetailsAPI();
  let [animationvalue, setAnimation] = useState<boolean>(false)

  const history = useHistory();

  const [list, isloading] = useLocalStorage(); //custom hooks

  // if (!window.localStorage.getItem("Info")) {
  //   history.push("/");
  // }
  function getValue(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setNewInputData(event.target.value);
  }

  const updateData = () => {
    if (!newInputData) {
      alert("Please Fill The Data");
    } else if (newInputData && !edititem) {
      const todoref = firebase.database().ref("TODO");
      todoref.child(editinputid).update({
        name: newInputData,
      });
      updateedititem(true);
      setNewInputData("");
      seteditinputid("");
    } else {
      const todoref = firebase.database().ref("TODO");
      const Info = window.localStorage.getItem("Info");
      const todo = {
        Infoid: JSON.parse(Object(Info)).id,
        name: newInputData,
        done: false,
      };
      todoref.push(todo);
      setNewInputData("");
    }
  };
  const logoutFun = () => {
    history.push("/todoist");
    window.localStorage.removeItem("Info");
  };
  const profileFun = () => {
    setModalIsOpen(true);
  };
  const deleteEle = (index: { id: string }) => {
    const todoref = firebase.database().ref("TODO").child(index.id);
    todoref.remove();
  };
  const editEle = (id: string) => {
    let edit = list.find((ele: { id: string }) => {
      return ele.id === id;
    });
    updateedititem(false);
    setNewInputData(edit.name);
    seteditinputid(id);
  };
  const cutit = (linelist: any) => {
    const todoref = firebase.database().ref("TODO").child(linelist.id);
    todoref.update({
      done: !linelist.done,
    });
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} className="Modelview">
        <div className="Modeldiv">
          <button className="Modelbutton" onClick={setModalIsOpenToFalse}>
            x
          </button>
          <Details />
        </div>
      </Modal>
      <div className="profilediv">
        <button className="profilebutton" onClick={profileFun}>
          User
        </button>
      </div>
      <div className="Logoutdiv">
        <button className="Logoutbutton" onClick={logoutFun}>
          Logout
        </button>
      </div>
      <div className="Divbody">
        <Input data={newInputData} value={getValue} loading={isloading} />
        <div>
          {list.map(
            (
              listitems: {
                done?: boolean;
                name?: string;
                id: string;
                Infoid: string;
              },
              index: React.Key | null | undefined
            ) => {
              return (
                <div className={`${animationvalue ? 'animate' : 'Itemscard'}`} onAnimationEnd={()=>setAnimation(false)}>
                  <div className="Showmain" key={index}>
                    <div className="Show1">
                      <input
                        type="checkbox"
                        onClick={() => cutit(listitems)}
                      ></input>
                    </div>
                    <div className="Show2">
                      <h3
                        style={{
                          textDecoration: listitems.done
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {listitems.name}
                      </h3>
                    </div>
                    <div className="Show3">
                      <span
                        title="Delete Item"
                        onClick={() => {
                          setAnimation(true);
                          setTimeout(()=>deleteEle(listitems),1000)}
                        }
                        
                      >
                        <RiDeleteBin6Line />
                      </span>
                    </div>
                    <div className="Show4">
                      <span
                        title="Edit Item"
                        onClick={() => editEle(listitems.id)}
                      >
                        <RiEdit2Fill />
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        {edititem ? (
          <Button data={updateData} />
        ) : (
          <button className="btn" onClick={updateData}>
            Edit
          </button>
        )}
      </div>
    </>
  );
};

export default App;
