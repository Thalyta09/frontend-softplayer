import { React, useState, useEffect } from 'react';

const Listagem = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch("/api/player")
            .then(response => response.json())
            .then(data => setList(data))
    }, [])

    const deleteUser = (id) => {
        fetch("/api/player/" + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            const updatedList = list.filter(i => i.id !== id);
            setList(updatedList);
        })

    }

    return (
        <>
            <button className="btn-add">
                <a href="/formulario">
                    Add Player
                </a>
            </button>
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8">
                                <h2>Players</h2>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
                                <th>Gênero</th>
                                <th>Email</th>
                                <th>Naturalidade</th>
                                <th>Nacionalidade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((player) => {
                                return (
                                    <tr key={player.id} >
                                        <td >{player.name}</td>
                                        <td >{player.cpf}</td>
                                        <td >{player.birth_date}</td>
                                        <td >{player.gender}</td>
                                        <td >{player.email}</td>
                                        <td >{player.naturality}</td>
                                        <td >{player.nationality}</td>
                                        <td>
                                            <a
                                                className="edit"
                                                title="Edit" data-toggle="tooltip"
                                                href={"/formulario/" + player.id}
                                            >
                                                <i className="material-icons">&#xE254;</i>
                                            </a>
                                            <a
                                                className="delete"
                                                title="Delete" data-toggle="tooltip"
                                                onClick={() => deleteUser(player.id)}
                                            >
                                                <i className="material-icons">&#xE872;</i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Listagem