package com.example.demo1.Controllers;

import com.example.demo1.DTO.DoctorRequestDto;
import com.example.demo1.DTO.DoctorResposeDTO;
import com.example.demo1.Exception.AuthException;
import com.example.demo1.Exception.UserNotFoundException;
import com.example.demo1.Service.DoctorServices;
import com.example.demo1.model.Doctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {

    @Autowired
    private DoctorServices doctorServices;

    @GetMapping("/get")
    public String test(){
        return "hello";
    }

    @PostMapping("/create")
    public Doctor createDoctor(@RequestBody Doctor doctor){
        Doctor response = doctorServices.createDoctor(doctor);
        response.setPassword("");
        return response;
    }

    @GetMapping("{id}")
    public Doctor getDoctorById(@PathVariable("id") Long id) throws UserNotFoundException {
        return doctorServices.getDoctorById(id);
    }

    @PostMapping("/login")
    public Doctor login(@RequestBody DoctorRequestDto doctorRequestDto) throws AuthException {
        return doctorServices.loginDoctor(doctorRequestDto);
    }

    @PutMapping("{id}")
    public Doctor updateDoctor(@PathVariable("id") Long id,@RequestBody Doctor doctor) throws UserNotFoundException {
        return doctorServices.updateProfile(id,doctor);
    }


}
