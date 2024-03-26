import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Profile from './Profile';
import AddPatient from './AddPatient';

const Main = () => {
  const { click, setClick } = useContext(AuthContext);

  return (
    <div className="flex justify-between mt-[56px]">
      <AddPatient />
      {click && <Profile />}
    </div>
  );
};

export default Main;


