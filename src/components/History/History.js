import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
import { Container } from '@material-ui/core';
import SearchHeader from './SearchHeader';





class History extends Component {

    state = {
        value: 0,
    };

    constructor(props) {
        super(props);
    }



    render() {

        const { group, role, userRole, creationDate, day } = this.props;

        console.log(`****  History  render  creationDate:  ${ JSON.stringify(creationDate) }`);

        return (

            <div>
                <Container>
                    {/* <Row>
                      <Col sm={{ size: 12 }}> */}
                        <SearchHeader group={group} role={role} userRole={userRole} creationDate={creationDate} day={day} ></SearchHeader>
                      {/* </Col>
                    </Row> */}
  
 
                </Container>
                
            </div>

        );
    }







}

export default History;