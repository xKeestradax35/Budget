import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    viewCard: {
        width: Dimensions.get('screen').width,
        paddingVertical: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewTitle:{
        width: '100%',
        paddingHorizontal: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewCardRow: {
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 25,
        marginVertical: 10,
    },
    accTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    accAmount: {
        fontSize: 18,
        fontWeight: '200'
    }
})