import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import clienteService from '../../../services/Requests/clienteService';
import viaCepService from '../../../services/Requests/viaCepService';
import { style } from './style';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 
import apiViaCep from '../../../services/viaCepApi';

export const AtualizarCliente=({ route, navigation }) => {

    const {cliente} = route.params;
    const[mensagemErro, setMensagemErro] = useState ();
    const[clientes, setClientes] = useState ({
        idCliente: cliente.idCliente,
        nomeCompleto: cliente.nomeCompleto,
        cpfCliente: cliente.cpfCliente,
        nomeUsuario: cliente.nomeUsuario,
        senha: cliente.senha,
        email: cliente.email,
        dataNasc:cliente.dataNasc,
        telefone: cliente.telefone,
        celular: cliente.celular,
        endereco:{
            cep: cliente.endereco.cep,
            rua: cliente.endereco.rua,
            bairro: cliente.endereco.bairro,
            estado: cliente.endereco.estado,
            cidade: cliente.endereco.cidade,
            numero: cliente.endereco.numero.toString(),
            complemento:cliente.endereco.complemento,
        }
    })

    useEffect(() => {
        async function fetchData () {
            try{
                const response = await clienteService.getClienteId(clientes.idCliente);
                if (response){
                    setClientes(response.data);
                }
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])

    async function handleAdressValidation(params){
         await apiViaCep.get(`/${params}/json`).then((res) => {
            setClientes({...cliente, endereco:{
            cep: res.data.cep,
            estado: res.data.uf,
            rua: res.data.logradouro,
            bairro: res.data.bairro,
            cidade: res.data.localidade,
            }});
        }).catch((err) => {console.warn(err);});
    }

    async function Atualizar() {
        try{
            const response = await clienteService.putClienteId(clientes.idCliente, clientes);
            if (response){
            alert("Cliente atualizado!");
            setMensagemErro("")
        }
        }
        catch(err){
            console.log(err);
            setMensagemErro("Erro! Verifique as informações fornecidas.")
        }
    }

    return(
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
                    <View style={style.containerAtualizar}>
                        <Text style={style.textoLabel}>NOME COMPLETO</Text>
                        <TextInput style={style.input}
                        placeholder='Digite o nome completo...'
                        onChangeText={(valor) => setClientes({...clientes, nomeCompleto:valor})}
                        value={clientes.nomeCompleto}
                        ></TextInput>

                        <Text style={style.textoLabel}>CPF</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o CPF...'
                         onChangeText={(valor) => setClientes({...clientes, cpfCliente:valor})}
                         value={clientes.cpfCliente}
                        ></TextInput>

                        <Text style={style.textoLabel}>DATA DE NASCIMENTO</Text>
                        <TextInput style={style.input}
                         placeholder='Digite a data de nascimento...'
                         onChangeText={(valor) => setClientes({...clientes, dataNasc:valor})}
                         value={clientes.dataNasc}
                         ></TextInput>

                        <Text style={style.textoLabel}>NOME DE USUÁRIO</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o nome de usuário...'
                         onChangeText={(valor) => setClientes({...clientes, nomeUsuario:valor})}
                         value={clientes.nomeUsuario}
                         ></TextInput>

                        <Text style={style.textoLabel}>SENHA</Text>
                        <TextInput style={style.input}
                         placeholder='Digite a senha...'
                         onChangeText={(valor) => setClientes({...clientes, senha:valor})}
                         value={clientes.senha}
                         ></TextInput>

                        <Text style={style.textoLabel}>EMAIL</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o email...'
                         onChangeText={(valor) => setClientes({...clientes, email:valor})}
                         value={clientes.email}
                         ></TextInput>

                        <Text style={style.textoLabel}>TELEFONE</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o telefone...'
                         onChangeText={(valor) => setClientes({...clientes, telefone:valor})}
                         value={clientes.telefone}
                         ></TextInput>

                        <Text style={style.textoLabel}>CELULAR</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o celular...'
                         onChangeText={(valor) => setClientes({...clientes, celular:valor})}
                         value={clientes.celular}
                         ></TextInput>

                        <Text style={style.textoLabel}>CEP</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o CEP...'
                         onChangeText={(valor) => setClientes({...clientes, endereco:{cep:valor}})}
                         value={clientes.endereco.cep}
                         ></TextInput>
                    </View>
                        <View style={style.containerButton}>
                            <TouchableOpacity style={style.buttonCep}
                            onPress={() => handleAdressValidation(clientes.endereco.cep)}>
                                <Text style={style.textoButtonCep}>Validar</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={style.containerAtualizar2}>

                        <Text style={style.textoLabel}>RUA</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o nome da rua...'
                         value={clientes.endereco.rua}
                        ></TextInput>

                        <Text style={style.textoLabel}>NÚMERO</Text>
                        <TextInput style={style.input}
                        placeholder='Digite o número...'
                        onChangeText={(valor) => setClientes({...clientes, endereco:{...clientes.endereco, numero:valor}})}
                        value={clientes.endereco.numero.toString()}
                        ></TextInput>

                        <Text style={style.textoLabel}>BAIRRO</Text>
                        <TextInput style={style.input}
                        placeholder='Digite o nome do bairro...'
                        value={clientes.endereco.bairro}
                        ></TextInput>

                        <Text style={style.textoLabel}>CIDADE</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o nome da cidade...'
                         value={clientes.endereco.cidade}
                         ></TextInput>

                        <Text style={style.textoLabel}>ESTADO</Text>
                        <TextInput style={style.input}
                        placeholder='Digite o nome do estado...'
                        value={clientes.endereco.estado}
                        ></TextInput>

                        <Text style={style.textoLabel}>COMPLEMENTO</Text>
                        <TextInput style={style.input}
                         placeholder='Digite o complemento...'
                         onChangeText={(valor) => setClientes({...clientes, endereco:{...clientes.endereco, complemento:valor}})}
                         value={clientes.endereco.complemento}
                        ></TextInput>
                    </View>
                    <View style={style.containerButton}>
                        <TouchableOpacity style={style.buttonAtulizar}
                        onPress={() => Atualizar()}>
                            <Text style={style.textoButton}>ATUALIZAR CLIENTE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.buttonVoltar}
                        onPress={navigation.goBack}>
                            <AntDesign name="back" size={24} color="white" />
                            <Text style={style.textoButton}>Voltar</Text>
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