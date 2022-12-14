import { useState } from 'react';
import Api from '../api/Api';
import '../App.css';
import Profile from '../components/user_home/Profile';
import '../components/user_home/User_Home.css';
import profilePic from './profile_pic_man.jpg';


const UserHome: React.FC = () => {

    const [profile, setProfile] = useState(false);
    const [account, setAccount] = useState(false);


    return (
    
        <div className="backdrop">   
        <div className="userhome-container">
     
            <div id='row-1A'> 
                <button className='user2-btn'
                        style={{
                            backgroundImage: 'url(profile_pic_man.jpg)'
                        }}
                >  </button>  
            </div>

            <div id='row-1B'>                 
                <button className='profile-btn'
                onClick={click => (
                    setProfile(true),
                    setAccount(false)
                )}
                > Profile </button>
            </div>  
            <div id='row-1C'> 
                <h2> User Name </h2> 
            </div>
            
            <div id='row-1D'> 
                <a href='/'>
                    <button className="home-btn">HOME</button> 
                </a>
            </div>

       

            <div id='row-3A'> 
                <button className='pay-btn'> Pay </button>  
                <button className='pay-btn'> Transfer </button>
            </div>
            
            <div id='row-4A'>
                <div>
                    <button 
                    className='accounts'
                    onClick={e => (setAccount(true),
                                  setProfile(false))}
                    > Account 1</button>
                </div>
                <div>
                    <button className='accounts'> Account 2</button>
                </div>
            </div>                       

            <div id='row-2B'>
            <div className='user-display-container'>
                {profile && <Profile />}
                {account && <Api />}
                
            </div>
            </div>
            </div>
       </div>
    )
};

export default UserHome