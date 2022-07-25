import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        event: ""
    });

    const { name, username, email, phone, event } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        alert('Your input is send');
        navigate.push("/");

        
    };

    
    return (
        <div className="container flex justify-center mb-32 mt-20">
            <div className="w-auto mx-auto border shadow-2xl shadow-gray-900 p-5">
                <h2 className="text-center font-bold text-4xl mb-4">Add Event</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group ">
                        <input
                            type="text"
                            className="form-control border-2 border-gray-300 rounded py-2 form-control-lg my-2 w-96 px-3"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control border-2 border-gray-300 rounded py-2 form-control-lg my-2 w-96 px-3"
                            placeholder="Enter Your Username"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control border-2 border-gray-300 rounded py-2 form-control-lg my-2 w-96 px-3"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control border-2 border-gray-300 rounded py-2 form-control-lg my-2 w-96 px-3"
                            placeholder="Enter Your Phone Number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control border-2 border-gray-300 rounded py-2 form-control-lg my-2 w-96 px-3"
                            placeholder="Enter Your Event Name "
                            name="Event Name"
                            value={event}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="text-center">
                        <button  className="bg-sky-500 text-xl py-2 w-32 mt-2 rounded transition duration-500 ease-in-out hover:bg-sky-700 transform hover:-translate-y-1 hover:scale-110 p-4 border">Add Event</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
