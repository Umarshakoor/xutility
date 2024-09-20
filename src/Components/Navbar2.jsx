import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
    return (
        <ul>
            <li><Link to="/HomePage">Homepage</Link></li>
            <li><Link to="/AboutMe">AboutMe</Link></li>
        </ul>
    )
}

export default Navbar2