import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  const [navBurger, setNavBurger] = useState(true)

  const toggleBurger = () => {
    setNavBurger(!navBurger)
  }

  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto">
      <div>
        <button
          className={`flex lg:hidden ${navBurger ? '' : 'hidden'}`}
          onClick={toggleBurger}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
          </div>
        </button>
      </div>
      <button
        className={`${navBurger ? 'hidden' : ''} flex flex-col lg:flex`}
        onClick={toggleBurger}
      >
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
