import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import UpdateProfile from './Pages/UpdateProfile';


function App() {

  const { isAuthenticated } = useSelector(state => state.userInfo)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <LandingPage />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
