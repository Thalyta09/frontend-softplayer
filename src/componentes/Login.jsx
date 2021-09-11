import { React, useState } from 'react';

const Login = () => {

    const [login, setLogin] = useState({
        user: "",
        password: ""
    })

    return (
        <div className="signup-form">
            <form className="form-horizontal">
                <div className="row">
                    <div className="col-8 offset-4">
                        <h2>Login</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Usuario</label>
                    <div className="col-8">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="user" 
                            id="user"
                            value={login.user} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">Senha</label>
                    <div className="col-8">
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            id="password"
                            value={login.password} />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-8 offset-4">
                        <button 
                            type="submit" 
                            className="btn-env btn-primary btn-lg">
                                Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login