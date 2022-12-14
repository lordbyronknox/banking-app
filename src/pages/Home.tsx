import '../App.css'
import LoginForm from '../components/login/LoginForm';
import LoginKeypad from '../components/login/LoginKeypad';
import NavBar from "../components/NavBar";
import { useState } from 'react';
import Login from '../components/login/Login';


const Home:React.FC = () => {
    const [newUser, setNewUser] = useState(false);



    return (
        <div className="backdrop">
             <NavBar /> 
            <div className="container">
            <Login />
                
            </div>
        </div>
    );
};

export default Home;