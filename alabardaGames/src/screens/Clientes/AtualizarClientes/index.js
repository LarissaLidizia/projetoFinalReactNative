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

export const AtualizarCliente=() => {

    const navigation = useNavigation();
    /* const parametros = useParams(); */
    const[mensagemErro, setMensagemErro] = useState ();
    const[cliente, setCliente] = useState ({
        idCliente: "",
        nomeCompleto: "",
        cpfCliente: "",
        nomeUsuario: "",
        senha:"",
        email: "",
        dataNasc: "",
        telefone: "",
        celular: "",
        endereco:{
            cep: "",
            rua: "",
            bairro: "",
            estado: "",
            cidade: "",
            numero: "",
            complemento:""
        }
    })

    useEffect(() => {
        async function fetchData () {
            try{
                const response = await clienteService.getClienteId(id);
                if (response){
                    setCliente(response.data);
                }
            } catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [])

    async function handleAdressValidation(){
        try{
            const {data} = await viaCepService.getCep(cliente.endereco.cep);
            if (response){
                setCliente({...cliente, endereco:{...cliente.endereco, 
                cep:data.cep,
                estado: data.uf,
                rua: data.logradouro,
                bairro: data.bairro,
                cidade: data.localidade,
                }});
            }
        }catch(err){
            console.log(err);
        }
    }

    async function AtualizarCliente() {
        try{
            await await clienteService.putClienteId(id);
            alert("Cliente atualizado!");
            setMensagemErro("")
        }
        catch(err){
            console.log(err);
            setMensagemErro("Erro! Verifique as informações fornecidas.")
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
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
                       /*  placeholder='Digite o nome completo...'
                        onChangeText={valor => setCliente({...cliente, nomeCompleto(valor)})}
                        value={cliente.nomeCompleto} */
                        ></TextInput>

                        <Text style={style.textoLabel}>CPF</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>DATA DE NASCIMENTO</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>NOME DE USUÁRIO</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>SENHA</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>EMAIL</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>TELEFONE</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>CELULAR</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>CEP</Text>
                        <TextInput style={style.input}></TextInput>
                    </View>
                        <View style={style.containerButton}>
                            <TouchableOpacity style={style.buttonCep}>
                                <Text style={style.textoButtonCep}>Validar</Text>
                            </TouchableOpacity>
                        </View>
                    <View style={style.containerAtualizar2}>

                        <Text style={style.textoLabel}>RUA</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>NÚMERO</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>BAIRRO</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>CIDADE</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>ESTADO</Text>
                        <TextInput style={style.input}></TextInput>

                        <Text style={style.textoLabel}>COMPLEMENTO</Text>
                        <TextInput style={style.input}></TextInput>
                    </View>
                    <View style={style.containerButton}>
                        <TouchableOpacity style={style.buttonAtulizar}
                        onPress={() => AtualizarCliente()}>
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