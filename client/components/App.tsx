import './app.css'

import { Route, Routes } from 'react-router-dom'

import LandingPage from './LandingPage'
import Nav from './Nav'
import Home from './Home'
import Discography from './Discography'
import Users from './Users'
import Songs from './Songs'
import AddUser from './AddUser'
import About from './About'
import Bio from './Bio'
import Media from './Media'
import Gallery from './Gallery'
import SingleAlbum from './SingleAlbum'

function App() {
  return (
    <div>
      <LandingPage />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="biography" element={<Bio />}></Route>
        <Route path="albums" element={<Discography />}></Route>
        <Route path="albums">
          <Route path=":id" element={<SingleAlbum />}></Route>
        </Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="users/signup" element={<AddUser />}></Route>
        <Route path="songs" element={<Songs />}></Route>
        <Route path="media" element={<Media />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  )
}

export default App
