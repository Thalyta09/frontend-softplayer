import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Formulario = () => {

    const history = useHistory();

    const [player, setPlayer] = useState({
        name: "",
        cpf: "",
        birth_date: "",
        gender: "",
        email: "",
        naturality: "",
        nationality: ""
    })

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
        fetch('/api/player/create', {
            method: 'POST',
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
                                valueu={player.gender || ''}
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
                                Salvar
                            </button>
                            <button
                                className="btn-can btn-danger btn-lg"
                            >
                                <a href="/lista">
                                    Cancelar
                                </a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario