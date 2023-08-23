import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Top: {
        height: Dimensions.get('screen').height,
        position: 'absolute',
        top: 0
    },
    Box: {
        backgroundColor: '#688ea7',
    },
    topWave: {
    },
    viewBackground: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },
    viewTitle: {
        paddingHorizontal: 25,
        marginVertical: '10%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fdffff',
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
        backgroundColor: '#fdffff',
        opacity: 0.7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 5,
        paddingHorizontal: 25,
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
        shadowColor: "#323031",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
        opacity: 1,
        marginVertical: 10,
    },
    touchableSignINText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fdffff"
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
    },
})