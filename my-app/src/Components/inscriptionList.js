import React from "react";

function inscriptionList({inscriptions}) {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID ESTUDIANTE</th>
                    <th>ID MATERIA</th>
                    <th>FECHA DE INSCRIPCION</th>
                </tr>
            </thead>
                <tbody>
                    {inscriptions.map(inscription =>(
                        <tr key = {inscription.id_estudiante}>
                            <th>{inscription.id_estudiante}</th>
                            <th>{inscription.id_materia}</th>
                            <th>{inscription.fecha_inscripcion}</th>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}

export default inscriptionList;