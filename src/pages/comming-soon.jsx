import React from "react";
import { Link } from "react-router-dom";

const CommingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold">Coming Soon</h1>
      <p className="text-lg mt-2">We're working on something awesome!</p>
      <div className="mt-6">
        <span className="text-gray-400">Stay tuned for updates.</span>
      </div>
      <Link to={"/"} className="text-2xl pt-4 underline">Go Home</Link>
    </div>
  );
};

export default CommingSoon;
