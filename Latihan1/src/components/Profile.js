import React from "react";
import MyBio from "./MyBio";
import MyName from"./MyName"
import MyProfile from "./MyProfile";


export default function Profile () {
    const myData = {
        name:"Muhammad Alfan",
        age: 21,
        npm: 212310017,
    };

    const ClickMe = ({ children }) => {
        return <div>{children}</div>
    }

    const HandlerHitme = () =>{
        alert("Anda telah mengetuk saya");
      }
      

    return (
        <div className="p-5">
            <MyProfile/>
            <ClickMe>
                <h1>Klik dibawah ini</h1>
                <button onClick={HandlerHitme}>Klik Me</button>
            </ClickMe>
        </div>
    )
}

