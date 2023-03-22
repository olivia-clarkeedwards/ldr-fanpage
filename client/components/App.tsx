import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Discography from './Discography'
import ShowUsers from './ShowUsers'
import Songs from './Songs'
import AddUser from './AddUser'

function App() {
  return (
    <>
      <div>
        <h1>Welcome to the LDR fanpage!</h1>
      </div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/albums" element={<Discography />}></Route>
        <Route path="/users" element={<ShowUsers />}></Route>
        <Route path="/users/signup" element={<AddUser />}></Route>
        <Route path="/songs" element={<Songs />}></Route>
      </Routes>
    </>
  )
}

export default App
