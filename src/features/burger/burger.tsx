import { Link } from 'react-router-dom'
import { User } from '../../widgets'
import './burger.scss'

function Button() {
    return (
        <>
            <input type="checkbox" id="header__burger-checkbox"></input>
            <label htmlFor="header__burger-checkbox" className="header__burger-button">
                <span id="header__burger-line"></span>
            </label>
        </>
    )
}

function Menu() {
    return (
        <div className='header__burger-menu'>
            <User />
            <nav className='header__burger-nav'>
                <ol className="header__burger-list">
                    <li className="header__burger-item">
                        <Link to='/posts'>posts</Link>
                    </li>
                </ol>
            </nav>
        </div>
    )
}

export function Burger() {
    return (
        <div className="header__burger">
            <Button />
            <Menu />
        </div>
    )
}