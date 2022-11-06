import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";


function studentList({students}){
    const [search, setSearch] = useState("")

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results = []
    if(!search)
    {
        results = students
    }else{
            results = students.filter( (data)=>
            data.codigo_estudiante.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } 

    return (
        <Container>
            <input  value = {search} onChange={searcher} type = 'text' placeholder="Buscar" className="form-control"/>
            <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CODIGO</th>
                    <th>TIPO DE DOCUMENTO</th>
                    <th>NUMERO DE DOCUMENTO</th>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>ESTADO</th>
                </tr>
            </thead>
            <tbody>
                {results.map(student =>(
                    <tr key = {student.id_estudiante}>
                        <th>{student.id_estudiante}</th>
                        <th>{student.codigo_estudiante}</th>
                        <th>{student.tipo_documento}</th>
                        <th>{student.numero_documento}</th>
                        <th>{student.nombres}</th>
                        <th>{student.apellidos}</th>
                        <th>{student.estado}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </Container>
    );
}

export default studentList;