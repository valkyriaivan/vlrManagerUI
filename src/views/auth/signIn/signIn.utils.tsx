import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

let user = {
  token: cookies.get("userToken"),
  username: cookies.get("userUsername"),
  photo: cookies.get("userPhoto"),
};

export const getToken = () => {
  return user?.token;
};

export const getUser = () => {
  return user;
};

export const signIn = async (
  username: string,
  password: string,
  keepLogged: boolean
) => {
  try {
    const res = await axios.post("api/login", { username, password });
    user = res.data;
    console.log(user);
    if (keepLogged) {
      cookies.set("userToken", res.data.token);
      cookies.set("userUsername", res.data.username);
      cookies.set("userPhoto", res.data.photo);
    }
    return res;
  } catch (err) {
    return err;
  }
};

export const logOut = () => {
  cookies.remove("userToken");
  cookies.remove("userUsername");
  cookies.remove("userPhoto");
  user = null;
};
