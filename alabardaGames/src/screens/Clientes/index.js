import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import clienteService from '../../services/Requests/clienteService';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { style } from './style';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Cliente = () => {
    const navigation = useNavigation();
    const [lista, setLista] = useState([]);
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
                    id: response.data.idCliente > 0 ? response.data.idCliente : 0,
                    nomeCompleto: response.data.nomeCompleto,
                    nomeUsuario: response.data.nomeUsuario,
                    email: response.data.email,
                    dataNasc: response.data.dataNasc,
                    telefone: response.data.telefone,
                    celular: response.data.celular,
                })
                setMensagemErro("")
            }
        } catch (error) {
            setMensagemErro("Cliente inexistente!")
        }
    }

    async function DeletarCliente(id) {
        await clienteService.deleteCliente(id);
        var listaFiltrada = lista.filter(cliente => cliente.id !== id);
        setLista(listaFiltrada);
        alert('Cliente deletado!')
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await clienteService.getCliente();
                console.log(response.data)
                if (response) {
                    setLista(response.data)
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <StatusBar
                hidden={false}
            />
            <View style={style.containerHeader}>
                <Header />
            </View>
            <LinearGradient
                colors={['#7A2A8C', '#510151', '#02041E']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }} style={style.container}>
                <ScrollView>
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

                        {cliente.id !== 0 ? (
                            <View style={style.containerInformacoes} key={cliente?.nomeCompleto}>
                                <Text style={style.nome}> {cliente?.nomeCompleto}</Text>
                                <Text style={style.textoPesquisa}>
                                    Nome de usuário: {cliente?.nomeUsuario}{'\n'}
                                    Email: {cliente?.email}{'\n'}
                                    Data de nascimento: {cliente?.dataNasc}{'\n'}
                                    Telefones: {cliente?.telefone} / {cliente?.celular}
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <View style={style.containerButtonCadastrar}>
                        <TouchableOpacity
                            style={style.buttonCadastrar}
                            onPress={() => navigation.navigate('CadastrarCliente')}>
                            <Text style={style.textoButton}>CADASTRAR CLIENTE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.containerListarTodos}>
                        {
                            lista !== null ? (
                                lista.map((cliente) => {
                                    return (
                                        <View style={style.containerInformacoesLista}>
                                            <View style={style.containerButtons}>
                                                <TouchableOpacity
                                                    onPress={() => DeletarCliente(cliente.idCliente)}>
                                                    <Ionicons name="trash" size={24} color="white" />
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('AtualizarCliente')}>
                                                    <FontAwesome name="pencil-square-o" size={24} color="white" />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={style.containerTextos}>
                                                <Text style={style.nome}>
                                                    {cliente.nomeCompleto} - ID: {cliente.idCliente}
                                                </Text>
                                                <Text style={style.textoPesquisa}>
                                                    Nome de usuário: {cliente.nomeUsuario}{'\n'}
                                                    Email: {cliente.email}{'\n'}
                                                    Data de nascimento: {cliente.dataNasc}{'\n'}
                                                    Telefones: {cliente.telefone} / {cliente.celular}
                                                </Text>
                                            </View>
                                        </View>

                                    )
                                })
                            ) : null
                        }
                    </View>
                    <View style={style.containerButtonSair}>
                        <TouchableOpacity
                            style={style.buttonSair}
                            onPress={() => navigation.navigate('Login')}>
                            <SimpleLineIcons name="logout" size={24} color="white" />
                            <Text style={style.textoButton}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
            <View style={style.containerFooter}>
                <Footer />
            </View>
        </>

    )
}