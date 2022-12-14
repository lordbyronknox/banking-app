import '../../App.css';
import { useState } from 'react';
import Validator from './validator';



const LoginForm:React.FC = () => {

    type User = {
        accountnumber: string,
        passportId: string,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        }
    

    const initialUser = {
        accountnumber: "",
        passportId: "",
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    }

    const [formDetails, setUserDetails] = useState(initialUser);
    const [formErrors, setFormErrors] = useState(initialUser);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setUserDetails( {...formDetails, [name]: value });       
    };

    const handleClearForm = () => {
        setUserDetails( initialUser )
        setFormErrors(initialUser)
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();     
        setFormErrors(Validator(formDetails));
        console.log(formErrors)
    };


    

    return (
        <form onSubmit={handleSubmit}>
        <div className='register-container'>            
                
            <div id="accountnumber">
                <div>{formErrors.accountnumber}</div>
                
                <input className="register-input"              
                    type="text" 
                    placeholder="Account Number"
                    name="accountnumber"
                    value={formDetails.accountnumber}
                    onChange={handleChange}
                />
            </div>

            <div id="passport"> 
                <div>{formErrors.passportId}</div>

                <input className="register-input"                
                    type="text" 
                    placeholder="Passport/ID"
                    name="passportId"
                    value={formDetails.passportId}
                    onChange={handleChange}
                />
            </div>                          
             
            <div  id="firstname"> 
                <div>{formErrors.firstname}</div>

            <input className="register-input"               
                type="text" 
                placeholder="First Name"
                name="firstname"
                value={formDetails.firstname}
                onChange={handleChange}
                />
            </div>

            <div id="lastname">
                <div>{formErrors.lastname}</div> 

                <input className="register-input"                
                type="text" 
                placeholder="Last Name"
                name="lastname"
                value={formDetails.lastname}
                onChange={handleChange}
                />                    
            </div>
          
            <div id="email"> 
                <div>{formErrors.email}</div>

                <input className="register-input"                
                type="text" 
                placeholder="E-Mail"
                name="email"
                value={formDetails.email}
                onChange={handleChange}
                />
            </div>
                <div id="password">
                <div>{formErrors.password}</div>
                
                <input className="register-input"                
                type="password" 
                placeholder="Password"
                name="password"
                value={formDetails.password}
                onChange={handleChange}
                />
            </div>          

            <div id="clearform">
            <button className="register-clearform"                
                type='button'
                placeholder="Clear Form"
                onClick={handleClearForm}
            >Clear Form</button>
            </div>
            <div id="submit">
            <button className='register-submit' type="submit">SUBMIT</button>   
            </div>
        
        </div>
        </form>
    );
};

export default LoginForm;