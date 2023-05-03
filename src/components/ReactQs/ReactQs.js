import React from "react";
import Options from "../Options/Options";

const ReactQs = ({ qsData }) => {
  // console.log(qsData);
  const { id, correctAnswer, options, question } = qsData;


  return (
    <div>
      <div className="bg-base-300 rounded-lg mb-10 shadow-lg px-6 py-4 border border-yellow-600 ">
        <h2 className="text=2xl font-bold mb-4">Question</h2>
        <p className="text-white mb-4 text-xl">{question}</p>
        <div className="flex flex-col space-y-4">
          {options.map((option) => (
            <Options
              option={option}
              correctAnswer={correctAnswer}
              id={id}
           
            ></Options>
          ))}
     
        </div>
      </div>
    </div>
  );
};

export default ReactQs;
