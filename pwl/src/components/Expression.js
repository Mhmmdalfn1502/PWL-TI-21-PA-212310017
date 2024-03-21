import React from 'react';

const Expression = () => {
    const today = new Date();

    function myName() {
        return "M Alfan";
    }

    const CurrCourse = () => {
        return (
            <h3 style={{fontSize:"25px", color:"blue"}}>Pemrograman Web Lanjut</h3>
        );
    }

    const bgRed = {
        backgroundColor:"red",
        color:"white"
    }   

    return (
        <div>
            <h1>Today is {today.toTimeString()}</h1>
            <h2 style={bgRed}>My name is {myName()}  and I am a full stack developer.</h2>
            {CurrCourse()}
        </div>
    );
}

export default Expression;
