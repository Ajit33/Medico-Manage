package com.example.demo1.Service;

import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.model.Patient;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PatientService {

    Patient createPatient(Patient patient);
    String deletePatient(Long id) throws UserNotFoundException;
    Patient updatePatient(Long id,Patient patient) throws UserNotFoundException;

    Patient getPatientById(Long id) throws UserNotFoundException;
    List<Patient> getAllPatients();
}
