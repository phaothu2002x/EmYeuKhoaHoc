import React from 'react';
import { Link } from 'react-router';

const Welcome = () => {
    return (
        <div className="bg-white p-10">
            <h1 className="text-3xl font-bold text-center my-10">Welcome</h1>
            <Link
                to="/scrolltrigger"
                className="bg-gray-600 p-3 text-2xl text-white"
            >
                ScrollTrigger page
            </Link>
            <Link
                to="/utilsBasic"
                className="bg-gray-600 p-3 text-2xl text-white mx-2"
            >
                Uttils Basic page
            </Link>
        </div>
    );
};

export default Welcome;
