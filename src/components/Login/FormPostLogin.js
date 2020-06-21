import React, { Component } from 'react';
import './formPostLoginStyle.css';
import Effect from './Effect';


const FormPostLogin = (props) => {

    const { loginGroupError, loadingGroup } = props;

    const onClickPostLogin = () => {
        
        // let username = document.getElementById("inputEmail").value;
        // let password = document.getElementById("inputPassword").value;
        let groupId = document.getElementById("inputGroup").value;
        

        // console.log(` ************  username  ${username} `);
        // console.log(` ************  password  ${password} `);
        console.log(` ************  groupId  ${groupId} `);
                
        props.doLoginGroup({ groupId });
    };


    const onClickCreateGroup = () => {

        props.doCreateGroup();

    }

    
    return (
        <div className="postlogin-form">
            <div className="main-div">
                <div className="panel">
                    <h2>Grupo</h2>
                    <p>Ingrese el grupo al que desea acceder</p>
                </div>

                <div id="Postlogin">

                    {/* <div className="form-group">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" required="true"/>
                    </div> */}

                    <div className="form-group">
                        <input type="text" className="form-control" id="inputGroup" placeholder="Grupo" />
                    </div>

                    {/* <div className="forgot">
                             <a href="reset.html">¿Ha olvidado la contraseña?</a> 
                    </div> */}

                    <button  type="submit" className="btn btn-primary" onClick={onClickPostLogin}>Ingresar</button>
                    
                    <br></br>

                    <br></br>
                    <br></br>

                    <button  type="submit" className="btn btn-secondary" onClick={onClickCreateGroup}>Crear Grupo</button>
                    


                    {
                        loginGroupError ?
                        <div className="panel">
                            <p style={{color: 'red'}}>Acceso denegado. Verifique que pertenece al grupo ingresado.</p>
                        </div> :
                        <div></div>
                    }

                    <br/>

                    {
                        loadingGroup ? 
                            <Effect></Effect>
                            : <p></p>
                    }
                    
                </div>
            </div>
        </div>
    );
    
};

export default FormPostLogin;