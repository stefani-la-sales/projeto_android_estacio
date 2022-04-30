import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import AppContext from './AppContext';

const LoginScreen = ({ navigation }) => {
    const appContext = useContext(AppContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function onSubmit(credentials) {
        if (credentials.user && credentials.password) {
            appContext.signIn(credentials.user, credentials.password);
        }
        else {
            alert('Usuário e Senha devem ser preenchidos');
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <TextInput
                placeholder="Digite seu Nome"
                value={user}
                autoCapitalize="none"
                onChangeText={setUser}
                autoCorrect={false}
            />
            <TextInput
                secureTextEntry
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <TouchableOpacity
                onPress={() => onSubmit({ user, password })}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;
