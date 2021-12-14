import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import clienteService from '../../services/Requests/clienteService';
import { LinearGradient } from 'expo-linear-gradient';
import EStyleSheet from "react-native-extended-stylesheet";
import { useNavigation } from "@react-navigation/native";
import { style } from './style';
import { Feather } from '@expo/vector-icons';

export const Cliente = () => {
    const [idPesquisa, setIdPesquisa] = useState();
    const [mensagemErro, setMensagemErro] = useState();
    const [cliente, setCliente] = useState({
        id: 0,
        nomeCompleto: "",
        nomeUsuario: "",
        email: "",
        dataNasc: "",
        telefone: "",
        celular: "",
    });

    async function PesquisarCliente() {
        try {
            const response = await clienteService.getClienteId(idPesquisa)
            if (response) {
                setCliente({
                    id: response.idCliente > 0 ? response.idCliente : 0,
                    nomeCompleto: response.nomeCompleto,
                    nomeUsuario: response.nomeUsuario,
                    email: response.email,
                    dataNasc: response.dataNasc,
                    telefone: response.telefone,
                    celular: response.celular,
                })
            }
        } catch (error) {
            setMensagemErro("Cliente inexistente")
        }
    }

    return (
        <ScrollView>
            <LinearGradient
                colors={['#7A2A8C', '#510151', '#02041E']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }} style={style.container}>
                <View style={style.containerPesquisa}>
                    <Text style={style.textoLabel}>PESQUISAR CLIENTE</Text>
                    <View style={style.containerInputButton}>
                        <TextInput style={style.input}
                            placeholder='Digite o Id...'
                            onChangeText={valor => setIdPesquisa(valor)}
                            keyboardType='numeric'>
                        </TextInput>
                        <TouchableOpacity style={style.button}
                            onPress={() => PesquisarCliente()}>
                                <Feather name="search" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={style.erro}>{mensagemErro}</Text>
                </View>

            </LinearGradient>
        </ScrollView>
    )
    /*  <Octicons name='search' size={30} color='white' /> */
}