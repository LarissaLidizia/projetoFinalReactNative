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
    logo: {
        width: 150,
        height: 100,
    },
    titulo: {
        marginBottom: 60,
        color: 'white',
        fontSize: 24,
        // fontFamily: 'Oswald_SemiBold'
        fontWeight: 'bold',
       
    },
    texto: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
    },
    input: {
        fontSize: 20,
        backgroundColor: 'white',
        color: '#575459',
        width: '80%',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
    },
    erro: {
        color: 'yellow',
        fontSize: 15
    },
    button: {
        backgroundColor: '#00D2D2',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    }

})