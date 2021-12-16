import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from './style'
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import funcionarioService from '../../services/Requests/funcionarioService'
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export const Login = () => {

    const navigation = useNavigation();

    const [senha, setSenha] = useState(true);
    const [message, setMessage] = useState('Mostrar senha');
    const [senhaLogin, setSenhaLogin] = useState();
    const [usuarioLogin, setUsuarioLogin] = useState();
    const [mensagemErro, setMensagemErro] = useState("");

    async function handleVerificacao() {
        try {
            const response = await funcionarioService.getFuncionario(usuarioLogin)
            if (response) {
                if (senhaLogin == response.data.senha) {
                    navigation.navigate('Cliente');
                } else {
                    setMensagemErro("Usuário e/ou senha incorretos!")
                }
            }
        } catch (error) {
            setMensagemErro("Usuário e/ou senha incorretos!")
        }
    }

    function mostrarSenha() {
        setSenha(!senha);
        (message == "Mostrar senha") ? setMessage('Ocultar senha') : setMessage('Mostrar senha');
    }

    return (
        <LinearGradient
            colors={['#7A2A8C', '#510151', '#02041E']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }} style={style.container}>
            <Image style={style.logo} source={require('../../assets/logo.png')} />
            {/* <Image style={style.logo} source={require('../../assets/images/logo.png')} /> */}
            <Text style={style.titulo}>Alabarda Games</Text>
            <Text style={style.texto}>NOME DE USUÁRIO</Text>
            <TextInput style={style.input}
                onChangeText={valor => setUsuarioLogin(valor)}
                placeholder="Digite seu nome de usuário..."></TextInput>

            <Text style={style.texto}>SENHA</Text>
            <TextInput style={style.input}
                onChangeText={valor => setSenhaLogin(valor)}
                secureTextEntry={senha}
                placeholder="Digite sua senha..."></TextInput>
            <TouchableOpacity
                style={style.buttonMostrar}
                onPress={() => mostrarSenha()}>
                <Text style={style.buttonMostrarTexto}>{message}</Text>
            </TouchableOpacity>

            <Text style={style.erro}>{mensagemErro}</Text>

            <TouchableOpacity
                style={style.button}
                onPress={() => handleVerificacao()}
            ><Text style={style.texto}>LOGAR</Text></TouchableOpacity>
        </LinearGradient>
    )
}