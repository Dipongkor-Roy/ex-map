import React from "react";
import './TopicCart.css'
import { Link } from "react-router-dom";
const TopicCart = ({ topic }) => {
  const {id,name, logo, total } = topic;
 
  return (

     <div className="card w-96 bg-gray-700 shadow-xl m-3 px-3 ">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Total Number of Quiz:{total}</p>
        <div className="card-actions">
        <Link to={`/topic/${id}`}><button className="btn btn-warning">Let's Try</button></Link>
        </div>
      </div>
    </div>
   
  );
};

export default TopicCart;
