import React,{ useState, useEffect} from "react";
import CourseList from "./Components/courseList.js";
import InscriptionList from "./Components/inscriptionList.js";
import StudentList from "./Components/studentList.js";

function App(){

    const [courses,setcourses] = useState([])
    const [inscriptions,setinscription] = useState([])
    const [students,setstudent] = useState([])



    useEffect(() =>{
        const getCourse = () => {
            fetch('http://localhost:3000/materias/todas')
            .then(res => res.json())
            .then(res => setcourses(res))
            
        }
        getCourse()

        const getinscription = () => {
            fetch('http://localhost:3000/inscripciones/todas')
            .then(res => res.json())
            .then(res => setinscription(res))
            
        }
        getinscription()

        const getstudent = () => {
            fetch('http://localhost:3000/estudiantes/todos')
            .then(res => res.json())
            .then(res => setstudent(res))
            
        }
        getstudent()
    }, [])

    return(
        <div className="container">
            <div className="row">
                <h2 style={{textAling: 'center'}}>LISTA DE CURSOS</h2>
                <CourseList courses={courses}/>
                <h2 style={{textAling: 'center'}}>LISTA DE INSCRIPCIONES</h2>
                <InscriptionList inscriptions={inscriptions}/>
                <h2 style={{textAling: 'center'}}>LISTA DE ESTUDIANTES</h2>
                <StudentList students={students}/>
            
            </div>
        </div>
    );
}

export default App;