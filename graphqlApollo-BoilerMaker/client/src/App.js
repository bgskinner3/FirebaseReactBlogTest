
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home, CreatePost, Login, NavBar} from './Components'
import {useState} from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
