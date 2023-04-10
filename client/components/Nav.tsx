import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="container flex justify-between px-4 py-8 mx-auto">
      <div>
        <div className="flex lg:hidden">
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-stone-100 animate-pulse"></span>
          </div>
        </div>
      </div>
      <div className="hidden space-x-8 lg:flex">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/biography">Lana&apos;s Life</NavLink>
        <NavLink to="/albums">Discography</NavLink>
        <NavLink to="/songs">Songs</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/media/news">Media</NavLink>
      </div>
    </nav>
  )
}

export default Nav
