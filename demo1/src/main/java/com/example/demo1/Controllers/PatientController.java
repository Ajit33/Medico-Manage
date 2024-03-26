package com.example.demo1.Controllers;


import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.Service.PatientService;
import com.example.demo1.model.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/create")
    public Patient createPatients(@RequestBody Patient patient){
        Patient response = patientService.createPatient(patient);
        return response;
    }

    @GetMapping("/all")
    public List<Patient> getAllPatients(){
        List<Patient> users = patientService.getAllPatients();
        return users;
    }

    @GetMapping("{id}")
    public Patient getPatientById(@PathVariable("id") Long id) throws UserNotFoundException {
        Patient patient = patientService.getPatientById(id);
        return patient;
    }

    @DeleteMapping("{id}")
    public String deletePatientById(@PathVariable("id") Long id) throws UserNotFoundException {
        return patientService.deletePatient(id);
    }

    @PutMapping("{id}")
    public Patient updatePatient(@PathVariable("id") Long id, @RequestBody Patient patient) throws UserNotFoundException {
        return patientService.updatePatient(id,patient);
    }
}
