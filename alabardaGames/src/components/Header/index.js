import React from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from './style';

function Header() {
    
    const navigation= useNavigation();

    return(
        <View style={style.container}>
            <TouchableOpacity style={style.button}
             onPress={() => navigation.navigate('Login')}
            >
                <Image
                    style={style.logo}
                    source={require('../../assets/logo.png')}
                />
                <Text style={style.titulo}>Alabarda Games</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Header;