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
        width: '100%',
        height: '100%',
    },

    containerPesquisa: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
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
        width: 160,
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
    },

    containerInformacoes: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(19, 0, 139, 0.5)',
        padding: 5,
        borderRadius: 5,
    },

    containerInformacoesLista: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(19, 0, 139, 0.5)',
        padding: 5,
        borderRadius: 5,
        margin: 10,
    },

    textoPesquisa: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        
    },
    nome: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold",
    },
    
    containerHeader: {
        height: 60,
    },

    containerFooter: {
        height: 60,
    },

    containerListarTodos: {

    },

    containerButtons: {
        flexDirection: 'row',
    },

    containerTextos: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})