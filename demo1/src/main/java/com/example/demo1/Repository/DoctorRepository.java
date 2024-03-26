package com.example.demo1.Repository;

import com.example.demo1.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
    Doctor findByUsername(String username);
    Doctor findByEmail(String email);
}
