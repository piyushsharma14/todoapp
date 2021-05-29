import { Fetching_User_Data } from "../actions/action";

const initialState: any = [];
const fetchData = (state = initialState, action: any) => {
  switch (action.type) {
    case Fetching_User_Data:
      return action.Userdata;
    default:
      return state;
  }
};

export default fetchData;
