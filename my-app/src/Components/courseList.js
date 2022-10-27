import React from "react";

function courseList({courses}) {
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
                {courses.map( course =>(
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
    );
}

export default courseList;