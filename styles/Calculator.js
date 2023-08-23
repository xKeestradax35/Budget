import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    topView:{
        width:'100%',
        marginVertical: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    subOperation:{
        flexDirection:'row',
        alignItems:'center'
    },
    secondNumber:{
        fontSize: 36,
        fontWeight: '100'
    },
    operation:{
        fontSize: 44,
        fontWeight: '300',
        color:"#688ea7"
    },
    resultText:{
        fontSize: 48
    },
    centerView:{
        width:'100%',
        paddingHorizontal: 10,
    },
    row:{
        width: '100%',
        marginVertical: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }
})