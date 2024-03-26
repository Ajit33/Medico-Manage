package com.example.demo1.Service;

import com.example.demo1.DTO.DoctorRequestDto;
import com.example.demo1.Exception.AuthException;
import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.Repository.DoctorRepository;
import com.example.demo1.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class DoctorServiceImp  implements DoctorServices {

    @Autowired private DoctorRepository repo;
    @Override
    public Doctor createDoctor(Doctor doctor) {
        Doctor doctorobj = repo.save(doctor);
        return doctorobj;
    }

    @Override
    public Doctor loginDoctor(DoctorRequestDto doctorRequestDto) throws AuthException {
        Doctor requestedAccount = repo.findByEmail(doctorRequestDto.getEmail());
        if(requestedAccount == null){
            throw  new AuthException("invalid email");
        }
        if(requestedAccount != null){
            if(requestedAccount.getPassword().equals(doctorRequestDto.getPassword())) {
                return requestedAccount;
            }else{
                throw  new AuthException("invalid password");
            }
        }
        return requestedAccount;
    }



    @Override
    public Doctor getDoctorById(Long id) throws UserNotFoundException {
       return repo.findById(id).orElseThrow(()-> new UserNotFoundException("user not found"));
    }

    @Override
    public Doctor updateProfile(Long id, Doctor doctor) throws UserNotFoundException {
        Doctor requestedDoc = repo.findById(id).orElseThrow(()-> new UserNotFoundException("invalid id"));
        requestedDoc.setEmail(doctor.getEmail());
        requestedDoc.setUsername(doctor.getUsername());
        requestedDoc.setPassword(doctor.getPassword());
        requestedDoc.setContactNumber(doctor.getContactNumber());
        requestedDoc.setSpecility(doctor.getSpecility());
        return repo.save(requestedDoc);
    }
}
