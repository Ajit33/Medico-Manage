package com.example.demo1.Service;


import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.Repository.PatientRepository;
import com.example.demo1.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PatientServiceImp implements PatientService {

    @Autowired private PatientRepository patientRepo;
    @Override
    public Patient createPatient(Patient patient) {
        return patientRepo.save(patient);
    }

    @Override
    public String deletePatient(Long id) throws UserNotFoundException {
        Patient patient = patientRepo.findById(id).orElseThrow(()-> new UserNotFoundException("user not  found"));
        if(patient != null){
            patientRepo.deleteById(id);
        }

        return "user deleted successfully";
    }

    @Override
    public Patient updatePatient(Long id,Patient patient) throws UserNotFoundException {
        Patient requestedPatient = patientRepo.findById(id).orElseThrow(()-> new UserNotFoundException("patient not found"));
        requestedPatient.setName(patient.getName());
        requestedPatient.setAge(patient.getAge());
        requestedPatient.setMedicalHistory(patient.getMedicalHistory());
        return patientRepo.save(requestedPatient);
    }

    @Override
    public Patient getPatientById(Long id) throws UserNotFoundException {
        return patientRepo.findById(id).orElseThrow(()-> new UserNotFoundException("Patient not found"));
    }

    @Override
    public List<Patient> getAllPatients() {
        List<Patient> patients = patientRepo.findAll();
        return patients;
    }
}
