import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput
} from 'react-native';
import login from '../../assests/style';
import firebase from 'react-native-firebase'


export default class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    };
    
    login = async () => {
        const { email, password } = this.state;

        try {
           const user = await firebase.auth().signInWithEmailAndPassword(email, password);
            this.setState({ isAuthenticated: true });
        console.log(user);
        } catch (err) {
            console.log(err)
        }
    }

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
                onPress={()=> this.login}>
                    <Text style={login.buttonText}>Entrar</Text>
                </TouchableOpacity>

                { this.isAuthenticated ? <Text>Logado com sucesso</Text> : null}
            </View>
        )
    }

}