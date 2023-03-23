import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/biography">Lana&apos;s Life</NavLink>
      <NavLink to="/albums">Discography</NavLink>
      <NavLink to="/songs">Songs</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/media/news">Media</NavLink>
    </nav>
  )
}

export default Nav
