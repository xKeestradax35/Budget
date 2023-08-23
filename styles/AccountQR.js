import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    QRView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    QRCardview:{
        backgroundColor: '#fdffff',
        opacity: 0.7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 200,
        padding: 40,
        marginVertical: 10,
    },
    ShareIDView:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    CopyButton:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fdffff',
        opacity: 0.7,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 200,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    CopyButtonText:{
        color:"#323031",
        marginVertical: 5,
        fontSize: 12,
    }
})