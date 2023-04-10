import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [navBurger, setNavBurger] = useState(true)

  const toggleBurger = () => {
    setNavBurger(!navBurger)
  }

  return (
    <nav className="container flex justify-center px-10 py-8">
      <div>
        <button
          className={`NAV-BURGER-CLOSED flex lg:hidden ${
            navBurger ? '' : 'hidden'
          }`}
          onClick={toggleBurger}
        >
          <div className="space-y-2">
            <svg
              className="h-10 w-10 text-stone-100 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="7 11 12 6 17 11" />
              <polyline points="7 17 12 12 17 17" />
            </svg>
          </div>
        </button>
      </div>
      <button
        className={`NAV-BURGER-OPEN ${
          navBurger ? 'hidden' : ''
        } flex flex-col lg:flex`}
        onClick={toggleBurger}
      >
        <svg
          className="h-10 w-10 text-stone-100"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/biography">Lana&apos;s Life</NavLink>
        <NavLink to="/albums">Discography</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/media/news">Media</NavLink>
      </button>
    </nav>
  )
}

export default Nav
