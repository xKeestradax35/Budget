import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    ScrollView:{
        width: Dimensions.get('screen').width,
        paddingVertical: 20,
        // backgroundColor:"#fdffff"
    },
    SignOutView:{
        width: Dimensions.get('screen').width,
        paddingVertical: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    SignOutButton:{
        width: '90%',
        paddingVertical: 15,
        justifyContent:'center',
        alignItems:'center',
    },
    SignOutButtonText:{
        fontSize: 18,
        color:'gray',
    }
})