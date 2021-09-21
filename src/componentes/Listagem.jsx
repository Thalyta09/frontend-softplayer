import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listagem = () => {

    const [list, setList] = useState([])
    const [search, setSearch] = useState({
        name: ""
    })

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

    const refresh = () => {
        fetch("/api/player")
            .then(response => response.json())
            .then(data => setList(data))
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setSearch((valorAntigo) => {
            return {
                ...valorAntigo,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/api/player/search?name=" + search.name)
            .then(response => response.json())
            .then(data => setList(data))
    }

    return (
        <>
        <div className="search">
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-sm-8">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            placeholder="Search By Name"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="btn-add"
                        type="submit">
                        Search
                    </button>
                </div>
            </form>
            </div>

            <div className="table-responsive">
                <div className="table-wrapper">

                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Players</h2>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn-add">
                                    <Link className="link" to="/formulario" >
                                        <i className="material-icons">&#xE145;</i>
                                        <span>Add Player</span>
                                    </Link>
                                </button>
                                <button className="btn-add" onClick={refresh}>
                                    <div className="link">
                                        <i className="material-icons">&#xe5d5;</i>
                                        <span>Reload</span>
                                    </div>
                                </button>
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
                                            <Link
                                                className="edit"
                                                title="Edit" data-toggle="tooltip"
                                                to={"/formulario/" + player.id}
                                            >
                                                <i className="material-icons">&#xE254;</i>
                                            </Link>
                                            <Link
                                                className="delete"
                                                title="Delete" data-toggle="tooltip"
                                                to="#"
                                                onClick={() => deleteUser(player.id)}
                                            >
                                                <i className="material-icons">&#xE872;</i>
                                            </Link>
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