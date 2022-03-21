import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {

  const { isAuthenticated } = useSelector(state => state.userInfo)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <LandingPage />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
