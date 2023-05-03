import React from 'react';
import QuizMarks from '../quizMark/QuizMark';

const Statics = () => {
    return (
        <div >
            <h2 className='text-4xl font-serif'>Quiz Marks And <span className='text-yellow-500'>Statics</span> </h2>
            <section className='grid h-screen place-items-center'>
            <QuizMarks></QuizMarks>
            </section>
            
        </div>
    );
};

export default Statics;