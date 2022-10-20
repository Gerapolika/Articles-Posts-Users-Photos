import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
    return (
        <>
          <header className="header">
            <nav>
              <Link to="/posts" className="headerLink">Posts</Link>
              <Link to="/users" className="headerLink">Users</Link>
              <Link to="/photos" className="headerLink">Photos</Link>
            </nav>
          </header>  
          <Outlet />
        </>
    )
}

export default Nav