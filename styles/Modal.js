import { StyleSheet } from "react-native";

export const ModalStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    view:{
        paddingHorizontal: 50,
        paddingVertical: 10,
        backgroundColor:'#fdffff',
        shadowColor: '#323031',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    button:{
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
        backgroundColor:'#ea526f',
        opacity: 0.8
    },
    buttonText:{
        fontSize: 12,
        fontWeight: '200',
        textTransform: 'uppercase',
        color:"#fdffff"
    },
    viewrow:{
        marginVertical: 10,
    },
    title:{
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    message:{
        fontSize: 12,
        fontWeight: '200',
        textTransform: 'none'
    },
})