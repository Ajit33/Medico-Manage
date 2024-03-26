import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [patients, setPatients] = useState([]);
  const [editPatientId, setEditPatientId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    age: '',
    medicalHistory: ''
  });

  useEffect(() => {
    // Fetch patients from API
    axios.get('http://localhost:8001/api/patient/all')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Error fetching patients:', error);
      });
  }, []);

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save new patient to the database
    axios.post('http://localhost:8001/api/patient/create', editFormData)
      .then(response => {
        setPatients([...patients, response.data]);
        setEditFormData({ name: '', age: '', medicalHistory: '' });
      })
      .catch(error => {
        console.error('Error adding patient:', error);
      });
  };

  const handleEdit = (id) => {
    setEditPatientId(id);
    const patientToEdit = patients.find(patient => patient.id === id);
    setEditFormData(patientToEdit);
  };

  const handleSave = (id) => {
    // Update patient data in the database
    axios.put(`http://localhost:8001/api/patient/${id}`, editFormData)
      .then(response => {
        const updatedPatients = patients.map(patient => {
          if (patient.id === id) {
            return { ...patient, ...editFormData };
          }
          return patient;
        });
        setPatients(updatedPatients);
        setEditPatientId(null);
      })
      .catch(error => {
        console.error('Error updating patient:', error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full ">
      <div className="max-w-md w-full bg-white shadow-md rounded-md overflow-hidden">
        <form onSubmit={handleSubmit} className="p-4">
          <input
            type="text"
            name="name"
            value={editFormData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <input
            type="number"
            name="age"
            value={editFormData.age}
            onChange={handleChange}
            placeholder="Age"
            className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="medicalHistory"
            value={editFormData.medicalHistory}
            onChange={handleChange}
            placeholder="Medical History"
            className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Patient
          </button>
        </form>
        <div className="p-4">
          <h2 className="text-lg font-bold">Patients</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Age</th>
                <th className="border border-gray-300 px-4 py-2">Medical History</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {patients.map(patient => (
                <tr key={patient.id}>
                  {editPatientId === patient.id ? (
                    <>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="text"
                          value={editFormData.name}
                          onChange={handleChange}
                          name="name"
                          placeholder="Name"
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <input
                          type="number"
                          value={editFormData.age}
                          onChange={handleChange}
                          name="age"
                          placeholder="Age"
                          className="w-full border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <textarea
                          value={editFormData.medicalHistory}
                          onChange={handleChange}
                          name="medicalHistory"
                          placeholder="Medical History"
                          className="w-full border border-gray-300 rounded-md"
                        ></textarea>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleSave(patient.id)}
                          className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                        >
                          Save
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
                      <td className="border border-gray-300 px-4 py-2">{patient.age}</td>
                      <td className="border border-gray-300 px-4 py-2">{patient.medicalHistory}</td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleEdit(patient.id)}
                          className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                        >
                          Edit
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
