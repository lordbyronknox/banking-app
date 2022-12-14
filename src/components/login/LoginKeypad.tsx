import React, { useState } from "react";
import UserI from './Login';



const LoginKeypad = ({getPin}: any) => {



    //login alert displays when clicking ENTER.
    const [loginAlert, setLoginAlert] = useState(false);
    const [entries, setEntries] = useState<string[]>([]);
    const [code, setCode] = useState<number[]>([]);
    // const [user, setUser] = useState(currentUser);

    const handleClickKeys = (numb: number | string) => {
        if (typeof (numb) === 'number') {
            if(entries.length <6) {
                setCode([...code, numb]);
                setEntries([...entries, '*']);
                }
        }
        if (numb === "backSpace") {
            code.pop();
            entries.pop();
            setCode([...code]);
            setEntries([...entries]);
        }
        if (numb === "ENTER") {
            setLoginAlert(true);
            getPin(code);
        };
    };


    return (
        <>
            {loginAlert && loginAlert}
                    
            {entries[0] ? <button className="pincode-btn-filled" /> 
                                    : <button className="pincode-btn" />} 
            {entries[1] ? <button className="pincode-btn-filled" /> 
                : <button className="pincode-btn" />}  
            {entries[2] ? <button className="pincode-btn-filled" /> 
                : <button className="pincode-btn" />}  
            {entries[3] ? <button className="pincode-btn-filled" /> 
                : <button className="pincode-btn" />}  
            {entries[4] ? <button className="pincode-btn-filled" /> 
                : <button className="pincode-btn" />}  
            {entries[5] ? <button className="pincode-btn-filled" /> 
                : <button className="pincode-btn" />}  
            

                <div >
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(1)} > 1 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(2)} > 2 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(3)} > 3 </button>
                </div>
                <div>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(4)} > 4 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(5)} > 5 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(6)} > 6 </button>
                </div>
                <div>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(7)} > 7 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(8)} > 8 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(9)} > 9 </button>
                </div>
                <div>
                    <button className="keypad-btn"
                        onClick={e => {
                            setCode([])
                            setEntries([])
                        }} > C </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys(0)} > 0 </button>
                    <button className="keypad-btn"
                        onClick={e => handleClickKeys("backSpace")} > B </button>
                </div>
                <div>
                    <button
                        className="keypad-btn-enter"
                        onClick={e => handleClickKeys("ENTER")} > E </button>
                </div>
          
                
           
        </>




    )
};

export default LoginKeypad;