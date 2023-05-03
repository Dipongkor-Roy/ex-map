import React from "react";
import Footer from "./Footer";


const Blog = () => {
  return (
    <div>
      
      <div className="flex flex-col w-full">
        <div className="bg-base-300 rounded-lg shadow-lg p-6 mb-6">
          <p className="text-2xl font-serif "> <span className="text-yellow-500">Question:</span> What is purpose of react router?</p>
          <p className="my-2">
          
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.!
            
          </p>
        </div>
        <div className="divider"></div>
        <div className="bg-base-300 rounded-lg shadow-lg p-6 mb-6">
          <p className="text-2xl font-serif"><span className="text-yellow-500">Question:</span> How does context API work?</p>
          <p className="my-2">
         
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state. More information can be found on React's documentation
              page

          </p>
        </div>
        <div className="divider"></div>
        <div className="bg-base-300 rounded-lg shadow-lg p-6 mb-6">
          <p className="text-2xl font-serif">
          <span className="text-yellow-500">Question:</span> What is the usage of useHref hook?
          </p>
          <p className="my-2">
      
              The useHref hook returns a URL that may be used
              to link to the given to location, even outside of React Router.
        
          </p>
        </div>
      </div>
    <section className="mt-9">
    <Footer></Footer>
    </section>
    </div>
  );
};

export default Blog;
