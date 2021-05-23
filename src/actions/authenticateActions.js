
import { LOGIN, LOGOUT } from './types';
import { toast } from "react-toastify";
  
  
  export const LogIn = (userName,password) => {
      let user={}
    if(userName=='admin' && password=='admin')
    {
        user.userRole='Administrator'
        user.userName='admin'
    }
    else if(userName=='user' && password=='user'){
       user.userRole='User'
        user.userName='user'
    }  
    else{
        toast.error("An unexpected error occurrred."); 
    }  
    return {
      type: LOGIN,
      data:user
    };
  };

    
  export const LogOut = () => {    
    return {
      type: LOGOUT
    };
  };

  /* Login with JWT functionality
 export const LogIn = (email, password) => {
  export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}
  export const LogInWithJwt = () => {
    localStorage.setItem(tokenKey, jwt);
  };
   
  export const LogOut = () => {
    localStorage.removeItem(tokenKey);
  };
  
  export const setJwt=()=>
  {
    axios.defaults.headers.common["x-auth-token"] = jwt;
  }  
  export const getJwt=()=>
  {
    return localStorage.getItem(tokenKey);
  }  
  export const getCurrentUser =()=>{
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
      } 
      catch (ex) {
        return null;
      }
  }
  */
  
  