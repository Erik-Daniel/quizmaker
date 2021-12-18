import react from 'react';
import React from 'react'
import{ useState, useEffect} from 'react'
import "/styles/headerStyle.css"
import {Link} from 'react-router-dom'
export default function Header() {
    const loggedIn = [
        {
            log: false,
            user: "shena",
        }
    ]
    
    const [getUser, setUser] = useState(loggedIn);
    

            useEffect(() => {

                fetch('/quizmaker/data.php').then(
                    function(response) {
                        return response.json();
                    }
                ).then(function(data) {
                    console.log(data)
                    setUser(prev => ({log: data, ...prev.user}));
                });

                return(() => {})
            },[]);
        
    
    

    return (
        <div className='header'>
            <ul className='header-ul'>
                {getUser.log ? <li>Login</li> : <><li><Link to='/quizmaker/index.php/signup'><button>Signup</button></Link></li> <li><button>Login</button></li></>}
                
                

            </ul>
        </div>
    )
}
