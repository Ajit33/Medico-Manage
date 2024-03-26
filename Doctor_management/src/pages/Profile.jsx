import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { doctorId } = useContext(AuthContext);
  const [doctorData, setDoctorData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    specialty: '',
    description: '',
    email: '',
    contactNumber: ''
  });

  useEffect(() => {
    // Fetch doctor data from API
    axios.get(`http://localhost:8001/api/doctor/${doctorId}`)
      .then(response => {
        setDoctorData(response.data);
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctor data:', error);
      });
  }, [doctorId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save updated data to the database
    axios.put(`http://localhost:8001/api/doctor/${doctorData.id}`, formData)
      .then(response => {
        setDoctorData(response.data);
        setEditMode(false);
      })
      .catch(error => {
        console.error('Error updating doctor data:', error);
      });
  };

  return (
    <div className="flex z-100 flex-end">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden ">
        {doctorData ? (
          <div className="p-4">
            {editMode ? (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  placeholder="Specialty"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
              </form>
            ) : (
                <div className='flex flex-col items-center'>
                <h2 className="text-2xl font-bold text-blue-500">{doctorData.username}</h2>
                <div className="mt-4 bg-gray-100 p-4 rounded-md shadow-md w-80">
                  <p className="text-lg text-gray-800">Email: {doctorData.email}</p>
                  <p className="text-lg text-gray-800">Contact: {doctorData.contactNumber}</p>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  Edit Profile
                </button>
              </div>
              
            )}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
