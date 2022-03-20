import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
