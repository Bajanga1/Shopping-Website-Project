import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

function ShippingScreen(history) {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('submitted')
    }
    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='address'>
                    <Form.Label>
                        Address
                    </Form.Label>
                    <Form.Control required type='text' placeholder='Enter Address' value={address ? address : ''} onChange={(event) => setAddress(event.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>
                        City
                    </Form.Label>
                    <Form.Control required type='text' placeholder='Enter City' value={city ? city : ''} onChange={(event) => setCity(event.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='postalCode'>
                    <Form.Label>
                    Postal Code
                    </Form.Label>
                    <Form.Control required type='text' placeholder='Enter Postal Code' value={postalCode ? postalCode : ''} onChange={(event) => setPostalCode(event.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='country'>
                    <Form.Label>
                    Country
                    </Form.Label>
                    <Form.Control required type='text' placeholder='Enter Country' value={country ? country : ''} onChange={(event) => setCountry(event.target.value)}></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>

            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
