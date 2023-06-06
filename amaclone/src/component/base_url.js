import jwtDecode from "jwt-decode";

export const Base_Url = "http://localhost:3003/";

export let checkLogin = () => {
  //get token

  let token = localStorage.getItem("aouth_token");

  //decode token , return token and return null

  if (token) {
    try {
      return jwtDecode(token);
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
};
