import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Buttom from 'react-bootstrap/Button'
export default class Create extends Component {
  render() {
    return (
      <div className='form-wrapper'>
        <h1>Create</h1>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <Form.Group controlId=''>
            <Form.Label>1</Form.Label>
            <Form.Control type='text'/>
        </Form.Group>
        <br></br>
        <div className='d-grid gap-2'>
        <Buttom variant='success' size='lg' block='block' type='submit'>
                Create
        </Buttom>
        </div>
     
      </div>
    )
  }
}
