import { Dimensions, StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    safearea: {
        flex: 1,
        width: Dimensions.get('screen').width,
    },
    view: {
        width: Dimensions.get('screen').width,
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    cardview:{
        width: '95%',
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor:'#fdffff',
        // shadowColor: '#323031',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 1,
        // elevation: 5,
        // borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        textTransform:'uppercase',
        paddingVertical: 1
    },
    subtitle:{
        fontSize: 14,
        fontWeight: '200',
        textTransform:'uppercase'
    },
})