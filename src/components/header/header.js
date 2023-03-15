import './header.scss'

function Header() {
    return(
        <div className="main__header">
            <div className="header__logotypes">
            
            </div>
            <nav className="header__navbar">
                <ul className='header__nav'>
                    <li className='nav_item'><a href='#' >JavaScript</a></li>
                    <li className='nav_item'><a href='#' >React</a></li>
                    <li className='nav_item'><a href='#' >Redux</a></li>
                    <li className='nav_item'><a href='#' >HTML5</a></li>
                    <li className='nav_item'><a href='#' >CSS</a></li>
                </ul>
            </nav>
            <div className="header__user"></div>
        </div>
    )
}

export default Header