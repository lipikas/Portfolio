import React from 'react';
import {Link} from 'react-router-dom'
const Header = ({name})=>{
    return(
        <div>
            <div className="header_container">
                <Link to="/">
                    <h1>{name}.</h1>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <a href="/#projects">Projects</a>
                        </li>
                        <li>
                            <a href="/#end">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
