import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const onLoginHanlder = () => {
        setIsLoggedIn(!isLoggedIn)
        console.log(isLoggedIn)
    }

    const onProfileHandler = () => {
        Link.to('/profile')
    }

    return(
        <>
        <navigator className="navbar">
            <div>
              <button onClick={onProfileHandler}>Profile</button>
              <button>About Us</button>
              <input type="text"></input>
              <button>Filter By</button> 
            </div>
        <button onClick={onLoginHanlder} >{isLoggedIn ? 'logout' : 'login'}</button>
        </navigator>
        </>
    )
}

export default Navbar;