import { React, useState, useEffect } from 'react';

const Sobre = () => {

    const [link, setLink] = useState ();

    useEffect(() => {
        fetch("/api/source")
            .then(response => response.text())
            .then(data => setLink(data))
    }, [])

    return(
        <div className="signup-form">
            <form className="form-horizontal">
                <div className="row">
                    <div className="col-8 offset-4">
                        <h2>Github</h2>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-4">
                        <a className="github" href={link} target="_blank">
                            <h6>Código Backend</h6>
                        </a>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default Sobre