import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    ItemView:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderColor: '#323031',
        borderBottomWidth: 0.3,
    },
    Top:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 2
    },
    TextTop:{
        fontSize: 14,
        textTransform:'capitalize',
        fontWeight: '500',
    },
    Bottom:{
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 2
    },
    TextBottom:{
        fontSize: 14,
        textTransform:'capitalize',
        fontWeight: '200',
    },
})