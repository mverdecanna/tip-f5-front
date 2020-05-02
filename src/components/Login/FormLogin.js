import React, { Component } from 'react';
import './formLoginStyles.css';
import Effect from './Effect';


const FormLogin = (props) => {

    const { loginError, loading } = props;
    console.log(`**** FormLogin :  ${ JSON.stringify(loginError) }`);

    const onClickLogin = () => {
        
        let username = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        

        console.log(` ************  username  ${username} `);
        console.log(` ************  password  ${password} `);
                
        props.doLogin({ username, password });
    };

    
    return (
        <div className="login-form">
            <div className="main-div">
                <div className="panel">
                    <h2>Admin Login</h2>
                    <p>Por favor ingrese su email y contraseña</p>
                </div>

                <div id="Login">
                    <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" required="true"/>
                    </div>

                    <div className="forgot">
                            {/* <a href="reset.html">¿Ha olvidado la contraseña?</a> */}
                    </div>

                    <button  type="submit" className="btn btn-primary" onClick={onClickLogin}>Ingresar</button>
                    
                    <br></br>

                    {
                        loginError ?
                        <div className="panel">
                            <p style={{color: 'red'}}>Acceso denegado. Verifique su usuario y contraseña ingresadas.</p>
                        </div> :
                        <div></div>
                    }

                    <br/>

                    {
                        loading ? 
                            <Effect></Effect>
                            : <p></p>
                    }
                    
                </div>
            </div>
        </div>
    );
    
};

export default FormLogin;