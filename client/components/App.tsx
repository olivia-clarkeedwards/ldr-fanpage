import { Route, Routes } from 'react-router-dom'
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

function App() {
  return (
    <>
      <div>
        <h1>Welcome to the LDR fanpage!</h1>
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/biography" element={<Bio />}></Route>
        <Route path="/albums" element={<Discography />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/signup" element={<AddUser />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
        <Route path="/media" element={<Media />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    </>
  )
}

export default App
