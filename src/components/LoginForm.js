import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChange } from '../actions';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChange(text);
    }

    onPasswordChange(text) {
        this.props.onPasswordChange(text);
    }
        
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email' 
                        placeholder='user@email.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                    
                </CardSection>
                <CardSection>
                    <Input 
                        label='password' 
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, emailChange)(LoginForm);