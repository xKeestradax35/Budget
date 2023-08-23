import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    Container: {
        height: '100%',
        backgroundColor: '#fdffff',
    },
    InputView: {
        width: Dimensions.get('screen').width,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 20,
        paddingHorizontal: 35,
    },
    InputViewRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInput: {
        fontSize: 16,
        color: '#323031',
        textTransform: 'capitalize',
        marginVertical: 10,
    },
    Input: {
        width: '90%',
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
        marginHorizontal: 5
    },
    Button: {
        width: '100%',
        height: 65,
        backgroundColor: '#688ea7',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonDelete: {
        width: '100%',
        height: 65,
        backgroundColor: '#ea526f',
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
    },
    ScannerView: {
        height: Dimensions.get('screen').height / 1.35,
        width: '100%',

    },
    BarCode: {
        height: '100%',
        width: '100%'
    }
})