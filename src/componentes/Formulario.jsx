import { React, useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const Formulario = () => {
    
    const history = useHistory()
    const id = useParams()

    const [updated, setUpdated] = useState({
        param: "",
        method: "POST",
        messageButton: "Salvar"
    })
    
    const [player, setPlayer] = useState({
        name: "",
        cpf: "",
        birth_date: "",
        gender: "",
        email: "",
        naturality: "",
        nationality: ""
    })

    useEffect( ()=> {
        var index = parseInt(id.id)
        if (!isNaN(index)){

            fetch("/api/player/" + id.id)
            .then(response => response.json())
            .then(data => setPlayer(data))

            setUpdated({
                param: id.id,
                method: "PUT",
                messageButton: "Atualizar"
            })

        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setPlayer((valorAntigo) => {
            return {
                ...valorAntigo,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/player/' + updated.param, {
            method: updated.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(player),
        });
        history.push('/lista');
    }

    return (
        <>
            <div className="signup-form">
                <form className="form-horizontal" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-8 offset-4">
                            <h2>Cadastro</h2>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Nome</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                value={player.name || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">CPF</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                name="cpf"
                                id="cpf"
                                value={player.cpf || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Data de Nascimento</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                name="birth_date"
                                id="birth_date"
                                value={player.birth_date || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Gênero</label>
                        <div className="col-8">
                            <select
                                name="gender"
                                id="gender"
                                value={player.gender || ''}
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option>Escolha uma opção:</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">E-mail</label>
                        <div className="col-8">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={player.email || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Naturalidade</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                name="naturality"
                                id="naturality"
                                value={player.naturality || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label col-4">Nacionalidade</label>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control"
                                name="nationality"
                                id="nationality"
                                value={player.nationality || ''}
                                onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-8 offset-4">
                            <button
                                className="btn-env btn-primary btn-lg"
                                type="submit" >
                                {updated.messageButton}
                            </button>
                            <button
                                className="btn-can btn-danger btn-lg"
                            >
                                <Link className="link" to="/lista">
                                    Cancelar
                                </Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario