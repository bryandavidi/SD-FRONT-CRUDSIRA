import React from "react";

function studentList({students}){
    return (
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
            {students.map(student =>(
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
    );
}

export default studentList;