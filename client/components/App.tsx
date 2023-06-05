import './app.css'

import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Discography from './pages/Discography'
import Users from './pages/Users'
import Songs from './pages/Songs'
import AddUser from './pages/AddUser'
import About from './pages/About'
import Bio from './pages/Bio'
import Media from './pages/Media'
import Gallery from './pages/Gallery'
import SingleAlbum from './pages/SingleAlbum'

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
