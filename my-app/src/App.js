import React,{ useState, useEffect} from "react";
import CourseList from "./Components/courseList.js";
import InscriptionList from "./Components/inscriptionList.js";

function App(){

    const [courses,setcourses] = useState([])
    const [inscriptions,setinscription] = useState([])


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
    }, [])

    return(
        <div className="container">
            <div className="row">
                <h2 style={{textAling: 'center'}}>LISTA DE CURSOS</h2>
                <CourseList courses={courses}/>
                <h2 style={{textAling: 'center'}}>LISTA DE INSCRIPCIONES</h2>
                <InscriptionList inscriptions={inscriptions}/>
            </div>
        </div>
    );
}

export default App;