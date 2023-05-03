import React from "react";
import NavBar from "../../Layoutes/NavBar";


const Notfound = () => {
  return (
    <div>
        <NavBar></NavBar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="py-6">
             Sorry! It's Not Available.
            </p>
            <button className="btn btn-warning">Go To Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
