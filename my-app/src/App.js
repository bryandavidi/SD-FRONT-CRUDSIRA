import React,{ useState, useEffect} from "react";
import CourseList from "./Components/courseList.js";

function App(){

    const [courses,setcourses] = useState([])

    useEffect(() =>{
        const getCourse = () => {
            fetch('http://localhost:3000/materias/todas')
            .then(res => res.json())
            .then(res => setcourses(res))
            
        }
        getCourse()
    }, [])

    return(
        <div className="container">
            <div className="row">
                <h2 style={{textAling: 'center'}}>LISTA DE CURSOS</h2>
                <CourseList courses={courses}/>
            </div>
        </div>
    );
}

export default App;