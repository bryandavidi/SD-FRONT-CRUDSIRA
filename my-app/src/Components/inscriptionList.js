import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";

function inscriptionList({inscriptions}) {
    const [search, setSearch] = useState("")

    const searcher = (e) =>{
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results = []
    if(!search)
    {
        results = inscriptions
    }else{
            results = inscriptions.filter( (data)=>
            data.id_estudiante.toLowerCase().includes(search.toLocaleLowerCase())
        )
    } 
    return(
        <Container>
            <input value = {search} onChange={searcher} type = 'text' placeholder="Buscar" className="form-control"/>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID ESTUDIANTE</th>
                        <th>ID MATERIA</th>
                        <th>FECHA DE INSCRIPCION</th>
                    </tr>
                </thead>
                    <tbody>
                        {results.map(inscription =>(
                            <tr>
                                <th>{inscription.id_estudiante}</th>
                                <th>{inscription.id_materia}</th>
                                <th>{inscription.fecha_inscripcion}</th>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </Container>
    )
}

export default inscriptionList;