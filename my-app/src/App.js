import React from "react";
import {Route, Routes } from "react-router-dom";
// import CourseList from "./Components/CourseList.js";
// import InscriptionList from "./Components/InscriptionList.js";
// import StudentList from "./Components/StudentList.js";
import Login from "./Components/Login.js";
import NavBarHome from "./layouts/navbar.js";

// const Student = () => {
//     const [students,setstudent] = useState([])

//     useEffect(()=>{
//         const getstudent = () => {
//             fetch('http://localhost:3000/estudiantes/todos')
//             .then(res => res.json())
//             .then(res => setstudent(res))
//         }
//         getstudent()
//     },[]);

//     return (
//     <StudentList students={students}/>
//     );
// }

// const  Inscription = () => {
//     const [inscriptions,setinscription] = useState([])

//     useEffect(()=>{
//         const getinscription = () => {
//             fetch('http://localhost:3000/inscripciones/todas')
//             .then(res => res.json())
//             .then(res => setinscription(res))
            
//         }
//         getinscription()
//     },[]);

//     return(
//         <InscriptionList inscriptions={inscriptions}/>
//     );
// }

// const Course = () => {
//     const [courses,setcourses] = useState([])

//     useEffect(()=>{
//         const getCourse = () => {
//             fetch('http://localhost:3000/materias/todas')
//             .then(res => res.json())
//             .then(res => setcourses(res))
            
//         }
//         getCourse()
//     },[]);
    
//     return(
//         <CourseList courses={courses}/>
//     );
// }

function App(){
    return(
        <Routes>
                <Route path="/login" element ={<Login />}/>
                <Route path="/home" element ={<NavBarHome />}/>
                {/* <Route path="/inicio" element ={<Home />}/>
                <Route path="/estudiantes" element ={<Student />}/>
                <Route path="/materias" element ={<Course />}/>
                <Route path="/inscripciones" element ={<Inscription />}/> */}
        </Routes>      
    );
}

export default App;