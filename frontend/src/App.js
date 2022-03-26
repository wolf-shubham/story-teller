import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import Search from './Pages/Search';
import UpdateProfile from './Pages/UpdateProfile';
import UserProfile from './Pages/UserProfile';


function App() {

  const { isAuthenticated } = useSelector(state => state.userInfo)

  return (
    <BrowserRouter>
      {isAuthenticated ? <Header /> : ''}
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='/user/:id' element={isAuthenticated ? <UserProfile /> : <Login />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
