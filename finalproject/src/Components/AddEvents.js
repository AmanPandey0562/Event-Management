import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data.reverse());
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };

    return (
        <div className="container flex justify-center mb-48">
            <div className="py-5 mt-8">
                <h1 className="font-bold text-4xl text-center py-4 animate-bounce">Booked User Events</h1>
                <table className="border-2 border-white shadow-2xl shadow-gray-900 ">
                    <thead >
                        <tr >
                            <th className="px-2 py-2" scope="col">S.No</th>
                            <th className="px-2 py-2" scope="col">Name</th>
                            <th className="px-2 py-2" scope="col">Phone No</th>
                            <th className="px-2 py-2" scope="col">Email</th>
                            <th className="px-2 py-2" scope="col">Selected Event</th>
                            <th className="px-2 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td className="px-2 py-3">{user.name}</td>
                                <td className="px-2 py-3">{user.phone}</td>
                                <td className="px-2 py-3">{user.email}</td>
                                <td className="px-2 py-3">{user.event}</td>
                                <td className="px-2 py-3">
                                    <Link
                                        className="bg-green-600 mr-4 text-xl px-2 rounded"
                                        to={`/EditUser/edit/${user.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        className="bg-red-600 mr-4 text-xl px-2 rounded"
                                        onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
