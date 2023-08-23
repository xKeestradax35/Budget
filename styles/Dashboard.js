import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView:{
        width: Dimensions.get('screen').width,
        paddingVertical: 25,
    },
    viewChart:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: Dimensions.get('screen').width,
        paddingTop: 20,
        // backgroundColor:'#fff',
        // shadowColor: "#000",
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // shadowOffset: {
        //     height: 1,
        //     width: 1
        // },
        // borderRadius: 10,
        marginBottom: 20,
        textAlign:'center'
    },
    headerButtonView:{
        flexDirection: 'row'
    }
})