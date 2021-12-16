import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export const style = EStyleSheet.create({
    container: {
        flex: 1,
    },

    containerHeader: {
        height: 60,
    },

    containerFooter: {
        height: 60,
    },

    containerAtualizar:{
        paddingTop: 15,
        marginLeft: 60,
    },

    containerAtualizar2:{
        marginLeft: 60,
    },

    textoLabel:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        alignItems: 'flex-start'
    },

    input:{
        fontSize: 20,
        backgroundColor: 'white',
        color: '#575459',
        width: '80%',
        borderRadius: 5,
        marginBottom: 10,
        height: 40,
    },

    containerButton:{
        alignItems: 'center',
        justifyContent:'center'
    },

    buttonCep:{
        backgroundColor: '#00D2D2',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },

    textoButtonCep:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    buttonAtulizar:{
        backgroundColor: '#00D2D2',
        width: '60%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20,
    },

    buttonVoltar:{
        backgroundColor: '#00D2D2',
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
        flexDirection: 'row',
    },

    textoButton:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

})
