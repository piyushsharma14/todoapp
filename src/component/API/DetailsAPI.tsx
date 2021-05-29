import { useEffect, useState } from "react";
import firebase from "../Firebase/firebase_config";
import { useDispatch } from "react-redux";
import fetchAction from "../actions/index";

const useDetailsAPI = () => {
  const [list, setList] = useState<any[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const Userdata = firebase.database().ref("User");
    Userdata.on("value", (snapshot) => {
      let USER = snapshot.val();
      const userList = [];
      if (window.localStorage.getItem("Info")) {
        for (const key in USER) {
          if (
            key === JSON.parse(Object(window.localStorage.getItem("Info"))).id
          ) {
            userList.push({
              id: key,
              email: String(USER[key].email),
              password: String(USER[key].password),
              Name: String(USER[key].Name),
              City: String(USER[key].City),
              State: String(USER[key].State),
              Country: String(USER[key].Country),
              Phone: String(USER[key].Phone),
              Imageurl: String(USER[key].Imageurl),
            });
          }
        }
        setList(userList);
        dispatch(fetchAction(userList));
        //console.log("DetialsUserList",userList);
      }
    });
  }, [dispatch]);

  return list;
};
export default useDetailsAPI;
