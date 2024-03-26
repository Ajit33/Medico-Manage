package com.example.demo1.Service;

import com.example.demo1.DTO.DoctorRequestDto;
import com.example.demo1.Exception.AuthException;
import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.model.Doctor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public interface DoctorServices {

//    signup
    Doctor createDoctor(Doctor doctor);

//    login
    Doctor loginDoctor(DoctorRequestDto doctorRequestDto) throws AuthException;

//    get doctor information

    Doctor getDoctorById(Long id) throws UserNotFoundException;

//    update profile

    Doctor updateProfile(Long id,Doctor doctor) throws UserNotFoundException;
}
