import React, { useEffect, useState } from "react";
import './Home.css';

function Home() {

    const [events, setEvents] = useState([]);
    useEffect(() => {
        const url = " http://localhost:3000/event";
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setEvents(data));
    }, []);
    console.log(events)
    return (
        <div className="mb-50 ">
            <div className="image"></div>

            <div>
                <h1 className="animate-bounce text-center text-3xl font-bold py-10 leading-4 text-purple-700">
                    List Of Our Organised Events
                </h1>
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-gray-100 rounded-lg mx-4">
                    {events.map((event) => {
                        return(
                            <div className="border-2 mx-5 my-10 bg-white rounded-lg">
                            <p className="py-1 pl-10 text-2xl ">
                                <strong className="mr-4 text-purple-700">Our Event :</strong>
                                {event.event_name}
                            </p>
                            <img src={event.event_image} alt="course-images" className="mb-2 animate-pulse" />
                            <hr />
                            <p className="text-center  py-4">
                                {event.event_description}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div></div>
        </div>

    );
}

export default Home;