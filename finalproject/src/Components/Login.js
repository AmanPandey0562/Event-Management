import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


function LoginForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const url = "http://localhost:3100/signup";

    axios.get(url).then((res) => {
      const isLogin = res.data.find((userData) => {
        return (
          data.email === userData.email && data.password === userData.password
        );
      });

      if (isLogin) {
        alert("Log-In Success");
        navigate("/admin");
      } else {
        alert("not login");
      }
    });
  };
  return (
    <div className="signImage">
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-black">
           Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
            <div className="mb-2">
                <label
                    for="email"
                    className="block text-sl font-semibold text-black">
                    Emaile*
                </label>
                <input
                    type="email" name="email" className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"{...register("email", { required: true })} 
                />{errors.email && (
                  <span className="text-red-600">*Email is Required</span>
                )}
            </div>
            <div className="mb-2">
                <label
                    for="password"
                    className="block text-sl font-semibold text-black"
                >
                    Password*
                </label>
                <input
                    type="password" name="password"
                    className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md"{...register("password", { required: true })}

                />{errors.password && (
                  <span className="text-red-600">*Password is Required</span>
                )}
            </div>
          

            <div className="mt-6 text-center">
            <Link to='/Home'>
                <button className="w-52 px-4 py-2  text-white transition-colors duration-200 transform bg-purple-600 hover:bg-purple-900 rounded-lg">
                    Continue
                </button>
                </Link>
            </div>
        </form>
    </div>
</div>
</div>
  )}

export default LoginForm;
