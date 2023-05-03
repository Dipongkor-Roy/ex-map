import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicCart from "../TopicCart/TopicCart";
import Footer from "./Footer";

const Topics = () => {
    const allData=useLoaderData();
    const topics=allData.data;
 
    
  return (
    <div>
        {/* hero section start */}
      <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome</h1>
            <p className="py-6">
            <span className="text-4xl text-warning">"Unlock Your Potential with Unlimited Online Learning"</span>
            <br></br>
             <span className="py-3">
             To our innovative online learning platform, where education meets
              flexibility.
             </span>
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
      </section>
       {/* hero section finish */}
       <div className="flex flex-wrap justify-center mt-10">
       {
        topics.map(topic=><TopicCart
        key={topic.id}
        topic={topic}
        ></TopicCart>)
       }
       </div>
       <section>
        <Footer></Footer>
       </section>
    </div>
  );
};

export default Topics;
