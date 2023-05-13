import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import {MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext } from 'react'

function Header() {

    const {darkMode, setDarkMode} = useContext(ThemeContext)

    const handleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode)
        localStorage.setItem('darkMode', newDarkMode);
    }


  return (
    <header className={`header-container ${!darkMode && "header-light"}`}>
        <Link to ="/" className='logo'>CineTrail</Link>
        <div className="search-container">
            <input type="text" placeholder='Search movies...' className='search-container'/>
        </div>
        <div className="header-buttons-container">
            {darkMode ?(
                        <div className="theme-btn-container">
                        <MdOutlineLightMode  onClick={handleTheme} className='theme-icon'/>
                        <MdOutlineDarkMode className='theme-icon theme-icon-active'/>
                    </div>
  ) : (
    <div className="theme-btn-container">
    <MdOutlineLightMode  className='theme-icon theme-icon-active'/>
    <MdOutlineDarkMode onClick={handleTheme} className='theme-icon'/>
</div>
  )}

            <button className='create-account-btn'>Create Account</button>
        </div>
    </header>
  )
}

export default Header