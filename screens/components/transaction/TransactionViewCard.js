import { async } from '@firebase/util'
import { useNavigation } from '@react-navigation/native'
import { onSnapshot } from 'firebase/firestore'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity, } from 'react-native'
import { deleteATransaction, getTransaction } from '../../../api/firebase/accounts'
import { Styles } from '../../../styles/TransactionViewCard'
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TransactionViewCard({ AccountID }) {
  const navigation = useNavigation();

  const [datas, setdata] = useState([])

  const displayAllTransactions = async () => {
    const query = await getTransaction({ AccountID: AccountID })

    onSnapshot(query, (snap) => {
      setdata(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })

  }

  const pass = ({ item, price, date, id }) => {
    navigation.navigate('ModifyTransaction', { pricer: price, dater: date, itemr: item, AccountID: AccountID, id: id })
  }

  useEffect(() => {
    displayAllTransactions()
  }, [])
  const rightThreshold = ({ uid, item, price, date, id }) => (
    <View style={{
      flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '35%',
    }}>
      <TouchableOpacity onPress={() =>deleteATransaction({AccountID: AccountID, Date: date, ID: id})} style={{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea526f'
      }}>
        <Icon name='trash-can' color={'#fdffff'} size={26} />
      </TouchableOpacity>
    </View>
  );
  const renderRightActions = ({ uid, item, price, date, id }) => (
    <View style={{
      flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '35%',
    }}>
      <TouchableOpacity onPress={() => pass({ item: item, price: price, date: date, id: id })} style={{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#688ea7'
      }}>
        <Icon name='pencil-outline' color={'#fdffff'} size={26} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>deleteATransaction({AccountID: AccountID, Date: date, ID: id})} style={{
        height: '100%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ea526f'
      }}>
        <Icon name='trash-can' color={'#fdffff'} size={26} />
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, width: Dimensions.get('screen').width, paddingHorizontal: 0, marginBottom: 25 }}>
      {datas.map(docs => {
        return (
          <Swipeable renderRightActions={() => renderRightActions({ uid: docs.id, item: docs.item, price: docs.price, date: docs.date, id: docs.id })}>

            <TouchableOpacity style={Styles.ItemView} key={docs.id} onPress={() => pass({ uid: docs.id, item: docs.item, price: docs.price, date: docs.date, id: docs.id })}>
              <View style={Styles.Top}>
                <Text style={Styles.TextTop}>{docs.item}</Text>
                <Text style={Styles.TextTop}>${docs.price}</Text>
              </View>
              <View style={Styles.Bottom}>
                <Text style={Styles.TextBottom}>{moment(docs.date).format('MMMM DD, YYYY')}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        )
      })}
    </View>
  )
}