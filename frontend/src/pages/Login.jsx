import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from "../store/auth";
import ErrorPage from './errorPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Values, setValues] = useState({
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:1000/api/v1/sign-in",
        Values,
        {
          withCredentials: true,
        }
      );
      dispatch(authActions.login());
      navigate("/profile");
    } catch (error) {
      toast.error(error.response?.data?.message || 'An error occurred!');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <ErrorPage />
      ) : (
        <div className="h-screen bg-slate-300 flex items-center justify-center">
          <ToastContainer position="top-center" draggable />
          <div className="w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center">
          <h1 className='flex items-end justify-center lg:justify-start mt-2 lg:mt-0 text-8xl font-bold text-center'>
          P
          <span>
            <img 
             src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png" 
             alt="headphone" 
             className='h-10 md:h-12 lg:h-20 mx-2'
             />
          </span>
          DCASTER
          </h1>
            <div className="mt-6 w-full">
              <div className="w-full flex flex-col mt-4">
                <label>Email</label>
                <input
                  type="email"
                  className="mt-2 px-2 py-2 rounded-full outline-none border border-black"
                  required
                  placeholder="Enter email ..."
                  name="email"
                  value={Values.email}
                  onChange={change}
                />
              </div>
              <div className="w-full flex flex-col mt-4 relative">
                <label>Password</label>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="mt-2 px-2 py-2 rounded-full outline-none border border-black w-full"
                  required
                  placeholder="Enter Password ..."
                  name="password"
                  value={Values.password}
                  onChange={change}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-14 transform -translate-y-1/2 bg-transparent border-none outline-none"
                >
                  <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                </button>
              </div>

              <div className="w-full flex flex-col mt-6">
                <button
                  className="bg-slate-800 font-semibold text-xl text-white rounded-full py-2"
                  onClick={handleSubmit}
                >
                  Login
                </button>
              </div>
              <div className="w-full flex flex-col mt-6">
                <p className="text-center">
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-semibold text-slate-800 hover:text-blue-600">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

