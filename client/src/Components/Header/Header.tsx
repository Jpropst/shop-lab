import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
    
    return (
        <header className='header'>
            <nav>
                <Link to='/'>
                    <h1>
                        Shop
                    </h1>
                </Link>
                <Link to='/products'>
                    Products
                </Link>
            </nav>
        </header>
    )
}

export default Header
