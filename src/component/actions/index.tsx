import { Fetching_User_Data } from "./action";

const fetchAction = (User: any) => {
  return {
    type: Fetching_User_Data,
    Userdata: User,
  };
};
export default fetchAction;
