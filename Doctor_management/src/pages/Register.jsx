import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '../component/Button';
import background from '../assets/background.jpg';
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    specialty: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8001/api/doctor/create', formData);
      navigate('/login');
      toast('Registration successful');
    } catch (error) {
      console.error(error);
      toast('Error occurred during registration');
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen absolue"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-w-screen sm:w-[500px] h-screen sm:h-[500px] flex items-center justify-center bg-[#77D5CB] py-12 px-4 sm:px-6 lg:px-8 rounded">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="specialty" className="sr-only">Specialty</label>
                <input
                  id="specialty"
                  name="specialty"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Specialty"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="contactNumber" className="sr-only">Contact Number</label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Contact Number"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Button>Register</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
