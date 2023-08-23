import { useNavigation } from '@react-navigation/native'
import { doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Button, FlatList, Dimensions } from 'react-native'
import { getAccounts, getTransaction } from '../../../api/firebase/accounts'
import { Styles } from '../../../styles/AccountViewCard'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Swipeable } from 'react-native-gesture-handler';

export default function AccountViewCard() {
  const navigation = useNavigation();

  const [datas, setdata] = useState([])

  const displayAllAccounts = async () => {
    const query = await getAccounts()

    onSnapshot(query, (snapshot) => {
      setdata(snapshot.data().accounts)
      // console.log(datas)
    })
  }
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    displayAllAccounts()

  }, [])

  const renderRightActions = () => (
    <TouchableOpacity onPress={() => alert('sh')} style={{
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flext-start',
    }}>
      <View style={{
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flext-start',
        borderRadius: 10,
      }}>
        <Text style={{ color: 'white' }}>Delete</Text>
      </View>
    </TouchableOpacity>
  );
  const FlatListRender = (docs) => {
    console.log(docs)
    return (
        <View style={{ width: Dimensions.get('screen').width, justifyContent: 'flex-start', alignItems: 'center' }}>
          <TouchableOpacity style={Styles.viewCardRow} onPress={() => { navigation.navigate('Account', { uid: docs.item.uid, titler: docs.item.name }) }}>
            <Text style={Styles.accTitle}>{docs.item.name}</Text>
          </TouchableOpacity>
        </View>
    )
  }

  return (
    <View style={Styles.viewCard}>
      <View style={Styles.viewTitle}>
        <Text style={Styles.title}>
          Accounts
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('AddAccount') }} style={{ marginHorizontal: 2 }}>
          <Icon name="plus-circle-outline" size={26} color="#688ea7" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={datas}
        renderItem={FlatListRender}
        keyExtractor={(docs) => docs.uid}
        extraData={selectedId} />
    </View>
  )
}
