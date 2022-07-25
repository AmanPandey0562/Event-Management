import React,{useState} from "react";
import "./SignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function SignUp() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState("");
  const { formState: { errors }} = useForm();
  
  function signUp() {
    axios
      .post("http://localhost:3100/signup", {
        name,
        email,
        mobile,
        password,
      })
      .then((response) => {
        setFormData([response.data, ...formData]);
      });
    navigate("/", { replace: true });
  }

  return (
    <>
      <div className="signImage py-16">
        <form className="w-1/3 h-auto m-auto  bg-white rounded-lg">
          <h1 className="text-3xl py-6 font-bold text-black pt-6 text-center">
            Sign Up
          </h1>
          <div className="p-5">
            <p className="text-2xl mb-3">Name*</p>
            <input type="text" onChange={(e) => setName(e.target.value)}

              className="border-box border-2 border-black-200 w-full p-3 rounded" />
            <p className="text-2xl mb-3">Email*</p>
            <input
              type="text" onChange={(e) => setEmail(e.target.value)}
              className="border-box border-2 border-black-200 w-full p-3 rounded"
            />{errors.email && (
              <span className="text-red-600">*Email is Required</span>
            )}
            <p className="text-2xl mb-3">Mobile*</p>
            <input
              type="tel"
              onChange={(e) => setMobile(e.target.value)}
              className="border-box border-2 border-black-200 w-full p-3 rounded"
            />
            <p className="text-2xl mb-3 mt-3">Password*</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-box border-2 border-black-200 w-full p-3 rounded mb-3"
            />{errors.password && (
              <span className="text-red-600">*Password is Required</span>
            )}
          </div>
          <Link to='/Login'>
          <button
            type="submit" onClick={signUp}
            className=" border-box border-2 font-bold text-white w-11/12 ml-6 mb-7 transition duration-700 ease-in-out bg-purple-600 hover:bg-purple-800 transform hover:-translate-y-1 hover:scale-110 p-4 rounded-lg"
          >
            Continue
          </button>
          </Link>
        </form>
      </div>
    </>
  );
}