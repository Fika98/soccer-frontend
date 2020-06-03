import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div class="ui stackable menu">
                <NavLink className="item"  to="/">Home</NavLink>
           
                <NavLink className="item"  to="/login">Login</NavLink>
            
                <NavLink className="item"  to="/register">Sign Up</NavLink>
            
                <NavLink className="item"  to="/barcelona">Barcelona</NavLink>
           
                <NavLink className="item"  to="/map">Map</NavLink>
</div>


    )
};

export default NavBar;