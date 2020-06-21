import React, { Component } from 'react';
import './formCreateGroupStyle.css';
import InputGroup from './InputGroup';
import InputEmail from './InputEmail';
import DaySelector from './DaySelector';
import PaperWithEmails from './PaperWithEmails';
import ButtonAddWithIcon from './ButtonAddWithIcon';
import { Grid, Container } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import ButtonCancelWithIcon from './ButtonCancelWithIcon';
import ButtonSaveWithIcon from './ButtonSaveWithIcon';

//import Effect from './Effect';




const FormCreateGroup = (props) => {

    //const { loginGroupError, loadingGroup } = props;
    const { invalidName, groupName, inputEmail, invalidEmail, emailList, readyToCreate, createOK } = props;



    const onClickCreateGroup = () => {
        props.create();
    }


    const handlerSelectDay = (value) => {
        props.setDaySelected(value);
    }


    const handlerInputEmail = (value) => {
        props.setInputEmail(value);
    }


    const onClickAddEmail = () => {
        props.addEmailToList();
    }


    const handlerRemoveEmail = (email) => {
        props.removeEmailToList(email);
    }


    const handlerChangeText = (value) => {
        props.setGroupName(value);
    }


    const handlerEvalName = (value) => {
        props.checkGroupId(value);
    }


    const handlerCancel = () => {
        props.cancelAndBack()
    }

    
    return (
        <div className="create-form">
            <div className="main-div">
                <div className="panel">
                    <h2 style={{fontFamily: "fantasy", fontSize: "xx-large",  }} >
                        Crea tu Grupo
                    </h2>
                    {/* <p>Ingrese el grupo al que desea acceder</p> */}
                </div>

                <br/>
                {/* <br/> */}

                <div id="Group">

                    <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "100%", fontFamily: "fantasy" }} >
                        
                            <InputGroup handlerEvalName={handlerEvalName} invalidName={invalidName} text={groupName} handlerChangeText={handlerChangeText}/>

                            <DaySelector handlerSelectDay={handlerSelectDay}/>

                    </div>


                    <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "90%", fontFamily: "fantasy" }} >

                        {/* <p style={{display: "inline-flex", alignItems: "center"}} >Invita a tus amigos</p> */}

                        <InputEmail handlerInputEmail={handlerInputEmail} inputEmail={inputEmail} invalidEmail={invalidEmail} />
 
                        <ButtonAddWithIcon addEmail={onClickAddEmail} invalidEmail={invalidEmail}/>
                    </div>


                    {/* <div>
    
                    </div> */}

                    <br/>

                    <div style={{width: "100%", display: "inline-flex"}} >

                        <PaperWithEmails emailList={emailList} handlerRemoveEmail={handlerRemoveEmail} />

                    </div>

                    <FormHelperText style={{textIndent: "13px"}}>Les va a llegar un mail con la invitación</FormHelperText>

                    

                    <br></br>

                    {/* <div className="form-group" style={{display: "inline-flex", justifyContent: "space-between", width: "85%", fontFamily: "fantasy", borderSpacing: "17px" }} >

                        <Grid  xs={5}>
                            <button  type="submit" className="btn btn-secondary" onClick={onClickCreateGroup}>Cancelar</button>
                            
                            <button  type="submit" className="btn btn-secondary" onClick={onClickCreateGroup}>Crear</button>
                        </Grid>
                    </div> */}


                    <Container display="flex" >
                        <div style={{display: "inline-flex", justifyContent: "space-between", width: "80%",}} >

                            {/* <button  type="submit" className="btn btn-secondary" onClick={onClickCreateGroup} style={{width: "45%"}} >Cancelar</button> */}
                            <ButtonCancelWithIcon handlerCancel={handlerCancel} />
                            
                            <ButtonSaveWithIcon readyToCreate={readyToCreate} createOK={createOK} onClickCreateGroup={onClickCreateGroup}/>
                            {/* <button  type="submit" className="btn btn-secondary" onClick={onClickCreateGroup} style={{width: "45%"}} >Crear</button> */}

                        </div>
                    </Container>

                    


                    {/* {
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
                    } */}
                    
                </div>
            </div>
        </div>
    );
    
};

export default FormCreateGroup;