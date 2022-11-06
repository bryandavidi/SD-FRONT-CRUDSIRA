import React, {useEffect,useState} from "react";
import {Route, Routes } from "react-router-dom";
import CourseList from "./Components/CourseList.js";
import InscriptionList from "./Components/InscriptionList.js";
import StudentList from "./Components/StudentList.js";
import Login from "./Components/Login.js";
import NavBarHome from "./layouts/Navbar.js";
import { Cookies } from "react-cookie";
import axios from 'axios';


const cookies = new Cookies();

const config = {
    headers:{
        Authorization: cookies.get('token')
    }
}

const Student = () => {
    const [students,setStudent] = useState([])

    useEffect( () => {
        const getstudent = async() => {
            const response= await axios.get('http://localhost:3000/estudiantes/todos',config)
            setStudent(response.data)
            console.log(response.data)
        }
        getstudent()
    },[]);
    return ( < StudentList students = { students } /> );
}

const  Inscription = () => {
    const [inscriptions,setInscription] = useState([])

    useEffect(()=>{
        const getinscription = async() => {
            const response = await axios.get('http://localhost:3000/inscripciones/todas',config)
            setInscription(response.data)
            console.log(response.data)
        }
        getinscription()
    },[]);

    return( < InscriptionList inscriptions = { inscriptions } /> );
}

const Course = () => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        const getCourse = async() => {
            const response = await axios.get('http://localhost:3000/materias/todas',config)
            setCourses(response.data)
            console.log(response.data)
        }
            
        getCourse()
    },[]);
    
    return(
        <CourseList courses={courses}/>
    );
}

function App(){
    return(
        <Routes>
                <Route path = "/menu" element ={<NavBarHome />}>
                    <Route path = "estudiantes" element ={<Student />}/>
                    <Route path = "materias" element ={<Course />}/>
                    <Route path = "inscripciones" element ={<Inscription />}/>
                </Route>
                <Route path = "/" element ={<Login />}/>
        </Routes>      
    );
}

export default App;