import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build();

export const style = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#13008B',
    },
    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
    },
    texto: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
    },
})