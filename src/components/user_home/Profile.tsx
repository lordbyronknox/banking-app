import User from './user.json';

const Profile = () => {

    return (
        <div className="profile-container">
            <div id='profile-grid-C1'>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Passport/ID</p>
                <p>Email</p>
                <p>Address</p>                             
            </div>
            <div id='profile-grid-C1bottom'>
                <button className='profile-pic-upload-btn'>
                    Upload Pic</button> 
            </div>  
            <div id='profile-grid-C2'>
                <p>{User[0].firstname}</p>
                <p>{User[0].lastname}</p>
                <p>{User[0].passport}</p>
                <p>{User[0].email}</p>
                <p>
                    <li>{User[0].address.street}</li>
                    <li>{User[0].address.suburb}</li>
                    <li>{User[0].address.town}</li>
                    <li>{User[0].address.city}</li>
                    <li>{User[0].address.code}</li>
                </p>
                
            </div>
            <div id='profile-grid-C3'>
            <button className="profile-btn">Edit</button>
            </div>
        </div>
    )
}

export default Profile;