import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../Firebase/firebase_config";

const useLocalStorage = () => {
  const [item, setitem] = useState<object[]>([]);
  const [isloading, setisloading] = useState<boolean>(true);
  const history = useHistory();

  useEffect(() => {
    if (!window.localStorage.getItem("Info")) {
      return history.push("/");
    }
    setisloading(true);
    const todoref = firebase.database().ref("TODO");
    todoref.on("value", (snapshot) => {
      const todo = snapshot.val();
      const Items = [];
      for (let id in todo) {
        if (
          todo[id].Infoid ===
          JSON.parse(Object(window.localStorage.getItem("Info"))).id
        ) {
          //console.log("ID",todo[id].Infoid)
          Items.push({ id, ...todo[id] });
        }
      }
      //console.log("Items",JSON.stringify((Items)));
      setitem(Items);
      setisloading(false);
    });
  }, [history]);

  //console.log("getlocal firsbase",item);
  return [JSON.parse(JSON.stringify(item)), isloading];
};
export default useLocalStorage;
