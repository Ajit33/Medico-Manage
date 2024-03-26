import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') === 'true');


    const [click, setClick] = useState(false);
    const [doctorId, setDoctorId] = useState('');

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLogin');
        if (loggedIn === 'true') {
            setIsLogin(true);
        }
        const doctor = localStorage.getItem('doctorId');
        if (doctor) {
            setDoctorId(doctor);
        }
    }, []);

    const logout = () => {
        setIsLogin(false);
        localStorage.removeItem('isLogin');
        localStorage.removeItem('doctorId');
    };

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, click, setClick, doctorId, setDoctorId, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
