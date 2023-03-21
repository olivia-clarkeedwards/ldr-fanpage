import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Discography from './Discography'
import ShowUsers from './ShowUsers'
import Songs from './Songs'

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
        <Route path="/songs" element={<Songs />}></Route>
      </Routes>
    </>
  )
}

export default App
