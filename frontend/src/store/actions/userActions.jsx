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

export const asyncloginuser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get("/users");

    const foundUser = data.find(
      (u) =>
        u.email.trim().toLowerCase() === user.email.trim().toLowerCase()
    );

    if (!foundUser) {
      console.log("User not found");
      return;
    }

    if (foundUser.password !== user.password) {
      console.log("Invalid password");
      return;
    }

    localStorage.setItem("user", JSON.stringify(foundUser));
    dispatch(loaduser(foundUser));

  } catch (error) {
    console.log(error);
  }
};


export const asyncregisteruser = (user) => async (dispatch,getState) =>{
    try {
        console.log(getState())
        const res = await axios.post("/users", user)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

export const asyncupdateuser =(user) => async(dispatch,getState) =>{
    try {
        const {data} = await axios.patch(`/users/${user.id}`, user)
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));
            dispatch(loaduser(data));
        
    } catch (error) {
        console.log(error)
    }
}

export const asyncdeleteuser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/users/${id}`);   // ✅ use id

    // clear localStorage
    localStorage.removeItem("user");

    // update redux
    dispatch(loaduser(null));

  } catch (error) {
    console.log(error);
  }
};
