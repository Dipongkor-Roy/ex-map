import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({option,correctAnswer}) => {  

  const notify = (options) => {
    if (options === correctAnswer) {
 
        toast("Answer is Correct");
      
    } else {
        toast(`Wrong Answer.Correct Answer is : ${correctAnswer}`);
   
    }
  };
    return (
        <div>
            <div>
            <button onClick={()=>notify(option)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
              {option}
                </button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Options;