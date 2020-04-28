import React from 'react'
import { Button, Form, Label, Input, FormGroup, Card } from 'reactstrap'
import { startSetUser } from '../action/user'
import { connect } from 'react-redux'
class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(startSetUser(this.state.email, this.props))
        console.log(this.props)
    }
    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label htmlFor="email">Email id</Label>
                        <Input type="text" placeholder="Enter your email id here" name="email" onChange={this.handleChange}/>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form >
            </div>
        )
    }
}

const mapStateTpProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateTpProps)(Login)