import './header.scss'
import { Link } from 'react-router-dom'


function Header() {
    return(
        <div className="main__header">
            <div className="header__logotypes">
            
            </div>
            <nav className="header__navbar">
                <ul className='header__nav'>
                    <li className='nav_item'><Link to='/'>Home</Link></li>
                </ul>
            </nav>
            <div className="header__user"></div>
        </div>
    )
}

export default Header