import EStyleSheet from "react-native-extended-stylesheet";
import { useFonts, Oswald_SemiBold } from '@expo-google-fonts/inter';

EStyleSheet.build();

export default props => {
    let[fontsLoaded] = useFonts({
        Oswald_SemiBold
    })
}

export const style = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    containerPesquisa: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    
    textoLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },

    containerInputButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },

    input: {
        fontSize: 20,
        backgroundColor: 'white',
        color: '#575459',
        width: '40%',
        height: 40,
        borderRadius: 5,
        marginRight: 10,
    },

    erro: {
        color: 'yellow',
        fontSize: 15
    },

    button: {
        backgroundColor: '#00D2D2',
        width: '20%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }

})