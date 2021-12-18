import React from 'react'
import { useState } from 'react';
import '/styles/signupStyle.css'
export default function Signup() {
    const [getEmail, setEmail] = useState();
    const [getPassword, setPassword] = useState();

    function handleEmailChange(e) {
        setEmail(e)
        console.log("before" + getEmail + "after");
    }
    function createAccount(){ 

    }
    return (
        <>
            <h1 className='title'>quizmaker</h1>
            <div className="container">
                <h2>Create an account for free</h2>
                <div className='signup'>
                    <input type='email' onChange={(e) => handleEmailChange(e.target.value)} name='email' placeholder='Email'></input>         
                    <input type='password' name='password' placeholder='Password'></input>            
                    <br/>
                    <button onClick={createAccount}>Create</button>
                </div>
                
            </div>
        </>
    )
}
