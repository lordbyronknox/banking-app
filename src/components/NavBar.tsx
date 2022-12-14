import '../App.css';


const NavBar: React.FC = () => {

    return (
        <div className="navbar">
            <div>
            <a href='/'>
            <button type='button' className='navbar-btn-home'>HOME</button>
            </a>
            <a href='/UserHome'>
            <button type='button' className='navbar-btn-userpage'>User Page</button>
            </a>           
            </div>
        </div>
    )
};

export default NavBar;