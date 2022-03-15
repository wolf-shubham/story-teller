import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserAction } from './StateManagement/Actions/UserActions';

function App() {

  const dispatch = useDispatch()

  // const { isAuthenticated } = useSelector((state) => state.user)
  const userData = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(() => {
    dispatch(loadUserAction())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/' exact element={userData ? <Home /> : <LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
