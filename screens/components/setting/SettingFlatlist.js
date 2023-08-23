import React from 'react'
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Dimensions,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingFlatlist() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Account',
            icon: 'account-outline'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Information',
            icon: 'information-outline'

        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Theme Mode',
            icon: 'invert-colors'
        },
    ];

    const Item = ({ title, icon }) => (
        <View style={styles.item}>
            <View style={styles.itemContent}>
            <Icon name={icon} size={24} />
            <Text style={styles.title}>{title}</Text>
            </View>
            <Icon name='arrow-right' size={24} />
        </View>
    );
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} icon={item.icon} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        backgroundColor: '#fdffff',
        width: '90%',
        borderColor: '#688ea7',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 10,
        alignSelf:'center',
        marginVertical: 3

    },
    itemContent:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        paddingHorizontal: 10,
        fontWeight:'200'
    },
});