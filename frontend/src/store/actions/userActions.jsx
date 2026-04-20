import axios from '../../api/axiosconfig'
import { loaduser, removeuser } from '../reducers/userSlice'

export const asynccurrentuser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) dispatch(loaduser(user));
    else console.log("user not logged in");

  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser());
    console.log("user logged out");
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) =>async(dispatch, getState)=>{
     try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`)
          if (data.length === 0) {
      console.log("Invalid credentials");
      return;
    }

    const loggedInUser = data[0];

    // ✅ save in localStorage
    localStorage.setItem("user", JSON.stringify(loggedInUser));

    // 🔥 IMPORTANT: update Redux
    dispatch(loaduser(loggedInUser));
    } catch (error) {
        console.log(error)
    }
}

export const asyncregisteruser = (user) => async (dispatch,getState) =>{
    try {
        console.log(getState())
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

