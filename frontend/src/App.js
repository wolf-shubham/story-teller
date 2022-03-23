import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Register from './Pages/Register';
import { userDetailsAction } from './stateManagement/Actions/userActions';


function App() {

  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.userInfo)

  useEffect(() => {
    dispatch(userDetailsAction())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Home /> : <LandingPage />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
