import React, { Component } from 'react';
import './loaderStyles.css';
import { CircleLoader } from 'react-spinners';
//import { Modal, ModalBody } from 'reactstrap';

const Loader = (props) => {
    
    return (
//        <Modal isOpen={props.isLoading}>
//            <ModalBody>
                <div className="loadingSpinner">
                    <CircleLoader
                        sizeUnit={"px"}
                        size={70}
                        color={'#f0ad4e'}
                        loading={props.isLoading}
                        />
                    <p>{props.text}</p>
                </div>
//            </ModalBody>
//        </Modal>
    );
};

export default Loader;