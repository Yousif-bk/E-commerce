import React, {useState} from 'react'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextProvider } from "../../../contexts/AuthContext";
const Login =()=> {
  // initialize state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { logIn, googleSignIn } = AuthContextProvider();
  const navigate = useNavigate();

  const handleLogin = async (e)  =>{
    // e.preventDefault();
    // setError("");
    // try {
    //   await logIn(email, password);
    //   navigate("/home");
    // } catch (err) {
    //   setError(err.message);
    // }
  }

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
 <div>
    <h1>Login</h1>
    <form>
      <label>
        Username:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label> password: </label>
      <input type="password"value={password} onChange={e => setPassword(e.target.value)} />
      <input type="submit" value="Login" onClick={handleLogin} />
    </form>
 </div>
  )
}
export default Login