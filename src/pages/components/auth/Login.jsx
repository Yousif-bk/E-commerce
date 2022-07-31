import React, { useState } from 'react'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/AuthContext";

const Login = () => {
  // initialize state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    console.log("Login button clicked");
    e.preventDefault();
    setError("");
    try {
      console.log("Login button");
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
      setError(err.message);
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-full bg-wave bg-cover bg-center bg-no-repeat md:h-screen">
      <div className="container  py-12 px-6 h-full ">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="p-4 w-1/3 h-3/5  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" name="email"  value={email} onChange={e => setEmail(e.target.value)}  id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
              </div>
              <div>
                <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}  id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                  </div>
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button type="submit" onClick={handleLogin} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login