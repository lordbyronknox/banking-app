import { useState } from "react";
import user from '../user_home/user.json';


//receive 'handleClick1' function as props from parent ('Login')
const LoginUsers = ({getUser}: any) => {

    const [currentUser, setCurrentUser] = useState(user[0]);

    return(
        <>
        {user.map( (i) => {
                return (
                <div>
                <button className="loginUser-btn"             
                        onClick={ e => { setCurrentUser(i);
                                         getUser(i)} 
                                }> {i.firstname}</button>
                </div>
                );
        })}
        

        </>
    )
};

export default LoginUsers;