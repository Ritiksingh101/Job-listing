import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebookF,
} from "react-icons/fa";
import { postUserData } from "../pages/reducer";
import { useDispatch } from "react-redux";


const RegisterAccount = () => {
  const dispatch =  useDispatch()
  const [isCandidate, setIsCandidate] = useState(true);
  const [company, setCompany] = useState(false);

  const [registerUserObj, setRegisterUserObj] = useState({});

  

  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="bg-white p-8  w-[50%] ">
        <h1 className="text-2xl font-bold text-center mb-4">
          Register Account
        </h1>
        <div className="flex justify-center mb-6 gap-4">
          <button
            className={`px-4 py-1 w-[40%] rounded-full font-semibold ${
              isCandidate ? "bg-[#00A7AC] text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setIsCandidate(true);
              setCompany(false);
            }}
          >
            Candidate
          </button>
          <button
            className={`px-4 py-1 w-[40%] rounded-full font-semibold ${
              company ? "bg-[#00A7AC] text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setIsCandidate(false);
              setCompany(true);
            }}
          >
            Company
          </button>
        </div>
        {isCandidate == true && (
          <form className="border w-[100%] p-5 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    onChange={(e) =>
                      setRegisterUserObj({
                        ...registerUserObj,
                        firstName: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Mr. Robert"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Last Name*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    onChange={(e) =>
                      setRegisterUserObj({
                        ...registerUserObj,
                        lastName: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Jonson"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">User Name*</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  onChange={(e) =>
                    setRegisterUserObj({
                      ...registerUserObj,
                      userName: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="robertjonson"
                  className="w-full border-none focus:ring-0 outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Email*</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  onChange={(e) =>
                    setRegisterUserObj({
                      ...registerUserObj,
                      email: e.target.value,
                    })
                  }
                  type="email"
                  placeholder="info@example.com"
                  className="w-full border-none focus:ring-0 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Password*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    onChange={(e) =>
                      setRegisterUserObj({
                        ...registerUserObj,
                        password: e.target.value,
                      })
                    }
                    type="password"
                    placeholder="Password"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
              {/* <div>
                <label className="block text-gray-700">Confirm Password*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    onChange={(e) =>
                      setConfirmPassword({
                        ...confirmPassword,
                        confirmPassword: e.target.value,
                      })
                    }
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div> */}
            </div>
            <div className="mt-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                Here, I will agree company terms & conditions.
              </label>
            </div>
            <button
            onClick={()=> dispatch(postUserData(registerUserObj))}
              // type="submit"
              className="mt-6 w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
            >
              Sign Up
            </button>
          </form>
        )}
        {company == true && (
          <form className="border w-[100%] p-5 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Mr. Robert"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Last Name*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Jonson"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">User Name*</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="robertjonson"
                  className="w-full border-none focus:ring-0 outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Email*</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="info@example.com"
                  className="w-full border-none focus:ring-0 outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Password*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700">Confirm Password*</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaLock className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border-none focus:ring-0 outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-700">
                Here, I will agree company terms & conditions.
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300"
            >
              Sign Up
            </button>
          </form>
        )}
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <a href="#" className="text-teal-500 hover:underline">
            Login Here
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="flex items-center space-x-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
            <FaGoogle className="w-4 h-4" />
            <span>Log in with Google</span>
          </button>
          <button className="flex items-center space-x-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
            <FaFacebookF className="w-4 h-4" />
            <span>Log in with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterAccount;
