import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#fdffff',
    },
    TitleView: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        fontSize: 28,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: "#323031"
    },
    InputView: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    TextInput: {
        fontSize: 16,
        color: '#323031',
        textTransform: 'capitalize',
        marginVertical: 10,
    },
    Input: {
        width: '100%',
        height: 55,
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
    },
    Button: {
        width: '60%',
        height: 65,
        backgroundColor: '#688ea7',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextButton: {
        fontSize: 16,
        color: '#fdffff',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    PositionCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})