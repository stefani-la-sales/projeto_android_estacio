import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import login from '../../assests/style';


export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    };

    render() {
        return (
            <View style={login.container}>
                <TextInput
                    style={login.input}
                    placeholder="Digite seu e-mail"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    style={login.input}
                    placeholder="Digite sua senha"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity
                style={login.button}
                onPress={()=> this.Router}>
                    <Text style={login.buttonText}>Entrar</Text>
                </TouchableOpacity>

                { this.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
            </View>
        )
    }

}