import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Top: {
        position: 'absolute',
        bottom: 0,
        zIndex: -1,
    },
    Box: {
        width: Dimensions.get('screen').width,
        backgroundColor: "#ea526f",
    },
    topWave: {
        bottom: 165
    },
    viewBackground: {
        flex: 1,
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fdffff',

    },
    viewTitle: {
        paddingHorizontal: 25,
        marginVertical: '20%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ea526f',
        textTransform: 'uppercase',
        textShadowColor: '#000',
        textShadowOffset: {
            width: 2.5,
            height: 2
        },
        textShadowRadius: 0.6,
    },
    viewInput: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    textInput: {
        width: '80%',
        height: 45,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    touchableSignIN: {
        width: '80%',
        height: 55,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#323031',
        opacity: 1,
        shadowColor: "#323031",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
        marginVertical: 10,
    },
    touchableSignINText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fdffff'
    },
    touchableSignUP: {
        width: '80%',
        height: 35,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    touchableSignUPText: {
        fontSize: 14,
        color:'#323031'
    },
})