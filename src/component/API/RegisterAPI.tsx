import { useEffect, useState } from "react";

const useRegisterAPI = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
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
      setList(userList);
      console.log("RegisterUserList", userList);
    };
    userFun();
  }, []);

  return JSON.parse(JSON.stringify(list));
};
export default useRegisterAPI;
