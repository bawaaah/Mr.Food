import { React, useState } from 'react'
import { FloatingLabel, Form, Button, Alert } from 'react-bootstrap'
import axios from 'axios'

import './Signup.css'

import mrFoodLogo from '../images/mrFoodLogo.jpeg'

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')

    const signUp = async() => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await axios.post("http://localhost:3000/user/add", {
                username,
                password,
                email,
                phone
            })
            console.log(res)
        } catch (error) {
            alert("The username that you entered is already exist please enter another one !!!")
        }
    }

    const handleInput = (e) => {
        const {id, value} = e.target
        if(id === 'floatingInput') setEmail(value)
        else if(id === 'floatingPassword') setPassword(value)
        else if(id === 'floatingUsername') setUsername(value)
        else if(id === 'floatingPhone') setPhone(value)
    }

    const [errors, setErrors] = useState({})

    const validate = () => {
        const inputErrors = {}

        if(!email) inputErrors.email = 'E-mail is Required'
        else if(!/\S+@\S+\.\S+/.test(email)) inputErrors.email = 'Invalid E-mail'

        if(!password) inputErrors.password = 'Password is Required'

        if(!username) inputErrors.username = 'Username is Required'

        if(!phone) inputErrors.phone = 'Phone number is Required'
        else if(!/^0\d{9}$/.test(phone)) inputErrors.phone = 'Invalid Phone Number'

        return inputErrors
    }

    return (
        <div className='signupContainer'>
            <div className='signup'>
                <div className='signupLogo'>
                    <img src={mrFoodLogo} alt="" className='ignupImage'/>
                </div>

                {errors.email && <Alert variant='danger' className='errorAlertSignup'>{errors.email}</Alert>}
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" onChange={handleInput}/>
                </FloatingLabel>

                {errors.password && <Alert variant='danger' className='errorAlertSignup'>{errors.password}</Alert>}
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" onChange={handleInput} />
                </FloatingLabel>

                {errors.username && <Alert variant='danger' className='errorAlertSignup'>{errors.username}</Alert>}
                <FloatingLabel controlId="floatingUsername" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" onChange={handleInput}/>
                </FloatingLabel>

                {errors.phone && <Alert variant='danger' className='errorAlertSignup'>{errors.phone}</Alert>}
                <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
                    <Form.Control type="phone" placeholder="Phone" onChange={handleInput}/>
                </FloatingLabel>

                <Button variant="outline-danger" className='signupButton' onClick={signUp}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Signup