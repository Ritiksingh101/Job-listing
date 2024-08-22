import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100%] flex-col">
      <h2 className="text-center text-2xl font-bold mb-6">Log In Here!</h2>
      <div className="w-[30%] ">
        <form className="bg-white w-[100%] border-[1px] border-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email*
            </label>
            <div className="  flex w-[100%] border shadow">
              <div className="h-[5vh] w-[10%]  flex  justify-center items-center ">
                <i class="fa fa-envelope pl-[10px]" aria-hidden="true"></i>
              </div>
              
                <input
                  className=" appearance-none  rounded w-[100%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="password"
                  placeholder="Email"
                />
              
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password*
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="font-semibold text-[14px]">Remember Me</span>
            </label>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between">
          <button class="relative h-[35px] w-[100%] overflow-hidden border  bg-white text-black font-bold  shadow transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-blue-400 hover:before:w-2/4 hover:before:bg-blue-400 hover:after:w-2/4 hover:after:bg-blue-400"><span class="relative z-10">Login</span></button>
          </div>
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <a onClick={()=>navigate("/signuppage")} href="#" className="text-blue-500 hover:text-blue-800">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
