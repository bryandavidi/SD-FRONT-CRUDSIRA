import React , { useState } from "react";
import Container from "react-bootstrap/esm/Container";


function courseList({courses}) {
    const [search, setSearch] = useState("")

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results = []
    if(!search)
    {
        results = courses
    }else{
            results = courses.filter( (data)=>
            data.codigo_materia.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } 
    return(
        <Container>
            <input value = {search} onChange={searcher} type = 'text' placeholder="Buscar" className="form-control"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>CODIGO</th>
                        <th>NOMBRE</th>
                        <th>CREDITOS</th>
                        <th>CUPOS</th>
                        <th>ESTADO</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map( course =>(
                        <tr key = {course.id_materia}>
                        <th>{course.id_materia}</th>
                        <th>{course.codigo_materia}</th>
                        <th>{course.nombre_materia}</th>
                        <th>{course.creditos_materia}</th>
                        <th>{course.cupos}</th>
                        <th>{course.estado_activo.toString()}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}

export default courseList;