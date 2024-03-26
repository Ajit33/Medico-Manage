import { createContext, useState,useEffect } from "react";


 export const AuthContext=createContext();


 export const AuthProvider=({children})=>{
    const [isLogin,setIsLogin]=useState(false)
    const [click,setClick]=useState(false)
    const [doctorId,setDoctorId]=useState('');
    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin');
        const doctor = localStorage.getItem('doctorId');
        if (loggedIn) {
          setIsLogin(true);
        }
        if (doctor) {
          setDoctorId(doctor);
        }
      }, []);
    return(
        <AuthContext.Provider value={{isLogin,setIsLogin,click,setClick,doctorId,setDoctorId}}>
            {children}
        </AuthContext.Provider>
    )
 }
