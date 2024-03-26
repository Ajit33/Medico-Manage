import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Main from './pages/Main';
import { AuthContext } from './context/AuthContext';


function App() {
    const { isLogin } = React.useContext(AuthContext);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/main'
            element={isLogin ? <Main /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;


