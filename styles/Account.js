import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView: {
        marginVertical: 25,
    },
    viewChart: {
        display: 'flex',
        width: '100%',
        paddingTop: 20,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        },
        borderRadius: 10,
        marginBottom: 20,
    },
    headerButtonView: {
        flexDirection: 'row'
    },
    TitleView:{
        width: Dimensions.get('screen').width,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    Title:{
        fontSize: 32,
        fontWeight: 'bold'
    },
    ButtonAddView:{
        width: 48,
        height: 48,
        position:'absolute',
        bottom: 25,
        right: 55,
        backgroundColor: 'blue',
        borderRadius: 100
    },
})