import React, { Component } from 'react'
import Buttom from 'react-bootstrap/Button'
import { Container, Row, Col } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
const styles = {
    Container: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        marginTop:10,
        marginLeft: 0,
        marginRight: 0
    },
    col: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row1:{
        marginTop:20,
        marginLeft: 0,
        marginRight: 0     
    }
};

export default class List extends Component {
  render() {
    return (
    <Container fluid style={styles.Container} >
        <Row style={styles.row } >
            <Col fluid style={styles.col} className="text-end" >
            <Buttom variant='success' size='lg' block='block' type='submit'>
                Create
        </Buttom>
            </Col>
        </Row>
        <Row style={styles.row1 }>
            <Col>
                <div className='table-wrapper'>
                    <Table striped bordered hover  variant="dark">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>name</th>
                                <th>name</th>
                                <th>name</th>
                                <th>name</th>
                                <th>name</th>
                            </tr>
                        </thead>
                    </Table>
                </div>
            </Col>
        </Row>
    </Container>
       
      
    )
  }
}
