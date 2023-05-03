import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQs from '../ReactQs/ReactQs';

const ReactPage = () => {
    const qsDatas=useLoaderData();
    // console.log(qsDatas);
    const{name}=qsDatas.data;
    const questions=qsDatas.data.questions;
       
    return (
        <div>
            <h3 className='text-4xl font-serif'>Topic Name: {name}</h3>
            <div className='py-5'>
            {
            questions.map(qsData=><ReactQs key={qsData.id}
            qsData={qsData}></ReactQs>)
            }
            </div>
        </div>
    );
};

export default ReactPage;