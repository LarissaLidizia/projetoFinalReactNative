import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';

function Footer() {
    
    const navigation= useNavigation();

    return(
        <View style={style.container}>
             <Text style={style.titulo}>©️2021 - GRUPO4</Text>
             <Text style={style.texto}>grupo4residencia@gmail.com</Text> 
             <Text style={style.texto}>Todos os direitos reservados | Termos de uso</Text>
        </View>
    )
}
export default Footer;