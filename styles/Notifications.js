import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    safeview: {
        flex: 1,
    },
    scrollview: {
        width: '100%',
        marginBottom: 50,
    },
    notifView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 25

    },
    notifContainer: {
        width: '90%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'column',
    },
    nofitItems:{
        paddingVertical: 20,
    },
    notifTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
    },
    notifBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 3,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
    },
    buttonView:{
        flexDirection:'row',
    },
    button:{
        marginHorizontal: 3,
        paddingHorizontal: 10
    },
    accept:{
        backgroundColor: "#73eb52",
        borderRadius: 10,
    },
    deny:{
        backgroundColor: "#ea526f",
        borderRadius: 10,
    },
    buttonText:{
        fontSize: 12
    }
})