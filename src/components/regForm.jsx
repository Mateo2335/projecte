import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap/';
import '../styles/register.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

const emailInputLog = props => {
    return (
        <Form.Control {...props.input} placeholder="Enter email" id={null}/>
    )
}

const passInputLog = props => {
    return (
        <Form.Control {...props.input} type="password" placeholder="Password"/>
    )
}

const userInput = props => {
    return (
        <Form.Control {...props.input} placeholder="Username"/>
    )
}


class Register extends Component {
    constructor() {
        super();
        this.state = {
        }

    }

    showInputLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/login', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.props.emailLog,
                password: this.props.passLog,
              })
            })
            .then(res => {
                console.log(res)
                if(res.redirected){
                    return <Redirect to="/"/>
                }
            })
            .catch((err, res) => console.log(err, res))
        }

    showInputRegister = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/register', {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailUser: this.props.emailReg,
                passwordUser: this.props.passReg,
                repassword: this.props.rePassReg,
                nomUser: this.props.userNameReg
              })
            })
            .then(res => {
                if(res.redirected){
                    window.location = res.url
                }
                return res;
            })
            .catch(err => err)
        }

    render(){
    return (
        <div className="log-reg-content">
            <div className="log">

                <Form>
                    <h3>Login</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Field name="emaillog" type="email" component={emailInputLog} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Field name="passlog" type="password" component={passInputLog} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check className="check" type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={this.showInputLogin} >
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="regist">
                <Form>
                    <h3>Register</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Field name="emailreg" type="email" component={emailInputLog} />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                        
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Field name="passreg" type="password" component={passInputLog} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Repeat password</Form.Label>
                        <Field name="repassreg" type="password" component={passInputLog} />
                    </Form.Group>
                    <Form.Label>User name</Form.Label>
                    <Field name="username" component={userInput} />
                    <Button className="summit" variant="primary" type="button" onClick={this.showInputRegister}>
                        Submit
                    </Button>
                </Form>

            </div>
        </div>
    )

    
}
}

const selector = formValueSelector('register/login')

Register = reduxForm({
    form: 'register/login'
})(Register)

Register = connect(state => ({
    emailLog: selector(state, 'emaillog'),
    passLog: selector(state, 'passlog'),
    emailReg: selector(state, 'emailreg'),
    passReg: selector(state, 'passreg'),
    rePassReg: selector(state, 'repassreg'),
    userNameReg: selector(state, 'username')
  }))(Register)

export default Register;