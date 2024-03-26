import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isLogin, setIsLogin, setDoctorId, click, setClick } = useContext(AuthContext);
 

  const handleLogout = () => {
    setIsLogin(false);
    setDoctorId(null);
  };

  return (
    <nav className='flex items-center justify-between fixed top-0 z-10 bg-[#9dd7e2] w-full px-4 py-2 text-nowrap '>
      <Link className='sm:text-2xl font-bold' to='/'>MedicoManage</Link>
      <ul className='flex space-x-4'>
        {!isLogin && (
          <>
            <Link to='/login'><button className='text-white bg-[#0a6ba2] hover:bg-[#4dbcda] px-4 py-2 rounded'>Sign In</button></Link>
            <Link to='/register'><button className='text-white bg-[#0a6ba2] hover:bg-[#4dbcda] px-4 py-2 rounded'>Register</button></Link>
          </>
        )}
        {isLogin && (
          <>
            <li><button onClick={() => setClick(!click)} className='text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded'>Profile</button></li>
            <li><button onClick={handleLogout} className='text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded'>Log Out</button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;





