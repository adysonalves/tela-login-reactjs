import React from "react";
import './LoginHTML.css'
import { Link } from "react-router-dom";

function telaLogin(){
    return(
        <main>
            <div className="container">
                <section className="banner-login">
                </section>

                <section className="form-login">
                    <form>
                        <h2>Login</h2>

                        <div className="row">
                            <input type="text" placeholder="Informe seu e-mail"/>
                        </div>

                        <div className="row">
                            <input type="text" placeholder="Informe seu e-mail"/>
                        </div>

                        <button type="submit">Acessar</button>
                    </form>

                    <Link to='/'><p>Ver Tela de Login Bootstrap</p></Link>
                </section>
            </div>
        </main>
    );
}

export default telaLogin;