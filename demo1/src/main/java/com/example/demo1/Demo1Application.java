package com.example.demo1;

import com.example.demo1.Service.DoctorServiceImp;
import com.example.demo1.Service.DoctorServices;
import com.example.demo1.Service.PatientService;
import com.example.demo1.Service.PatientServiceImp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Demo1Application {

    public static void main(String[] args) {
        SpringApplication.run(Demo1Application.class, args);
    }


    @Bean
    DoctorServices doctorServices(){
        return new DoctorServiceImp();
    }

    @Bean
    PatientService patientService(){
        return new PatientServiceImp();
    }
}
