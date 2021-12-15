import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export const style = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#13008B',
        flexDirection : 'row',
    },
    logo: {
        height: 30,
        width: 40,
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
    button: {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }

})