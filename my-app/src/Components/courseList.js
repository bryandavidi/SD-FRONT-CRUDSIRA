import React from "react";

const courseList = ({course}) =>{
    return(
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
                {course.map( course =>(
                    <tr key = {course.id_materia}>
                    <th>{course.id_materia}</th>
                    <th>{course.codigo_materia}</th>
                    <th>{course.nombre_materia}</th>
                    <th>{course.creditos_materia}</th>
                    <th>{course.cupos}</th>
                    <th>{course.estado_activo}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default courseList;