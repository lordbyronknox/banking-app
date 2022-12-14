import LoginForm from "./LoginForm";
import LoginUsers from "./LoginUsers";
import LoginKeypad from "./LoginKeypad";
import { useState } from "react";


export interface UserI  {
    initials: string,
    firstname: string,
    lastname: string,
    passport: string,
    email: string,
    address: {
        street: string,
        suburb: string,
        town: string,
        city: string,
        code: string,
    }, 
    profilepic: string,
    pincode: string,
    }


    

const Login: React.FC = () => {
    
    const [welcome2, setwelcome2] = useState(true);
    const [loginUser, setLoginUser] = useState(true);
    const [changeUser, setChangeUser] = useState(false);
    const [registerUser, setRegisterUser] = useState(false);
    const [user, setUser] = useState<UserI>();

    //get sellected user from LoginUsers (Select Users)
    //currentUser = obj received from LoginUsers
    const getUser = ( currentUser: UserI ) => {      
            setUser(currentUser);
            setChangeUser(false);
            setLoginUser(true)
            console.log(currentUser);
    };

    //pinCode = received from LoginKeyPad 
    const getPin = ( pin: number[] ) => { 
        if(pin.join("") === user?.pincode) {
            window.location.href = 'http://localhost:3000/UserHome';                   
        } else { console.log("NOPE")}
    };                                          
    

  const welcomeButton = <button className="welcome-btn"
            onClick={(e => setwelcome2(false))}
            >WELCOME</button>;
    

        
    return (
        <>
        {welcome2? welcomeButton : 
        <>
          <div className="user-controls-container">            
          <button className="user-btn"> {user?.initials} </button>
          <button className="user-btn-changeUser"
                        onClick={e => {
                            setChangeUser(true);
                            setRegisterUser(false);
                            setLoginUser(false);
                        } }>Select User</button>
              
            <button className="user-btn-register"
                    onClick={e => {
                        setChangeUser(false);
                        setLoginUser(false);
                        setRegisterUser(true);
                    } }>Register</button>  

            <button className="user-btn-register"
                    onClick={e => {
                        setChangeUser(false);
                        setLoginUser(false);
                        setRegisterUser(false);
                        setUser(undefined);
                    } }>Log Out</button>        
            </div> 

            <div className="keypad-form-user-container">
                {loginUser && <LoginKeypad getPin={getPin}/>}            
                {changeUser && <LoginUsers getUser={getUser} />}
                {registerUser && <LoginForm />}
            </div>
            </>      
        } </>
        )   

} 
    



export default Login;