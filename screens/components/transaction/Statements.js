import { async } from '@firebase/util'
import { useNavigation } from '@react-navigation/native'
import { doc, onSnapshot } from 'firebase/firestore'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity, } from 'react-native'
import { getStatements } from '../../../api/firebase/accounts'
import { Styles } from '../../../styles/TransactionViewCard'

export default function TransactionViewCard({ AccountID }) {
  const navigation = useNavigation();

  const [datas, setdata] = useState([])

  const displayAllStatements = async () => {
    const query = await getStatements({ AccountID: AccountID })
    setdata(query.data().statements)
  }

  const openStatement = ({path }) => {
    navigation.navigate('Statement', {path: path, AccountID: AccountID})
  }
  useEffect(() => {
    displayAllStatements()
  }, [datas])

  return (
    <View style={{ flex: 1, width: Dimensions.get('screen').width, paddingHorizontal: 0, marginBottom: 25 }}>
      {datas.map(docs => {
        return (
          <TouchableOpacity style={Styles.ItemView} onPress={()=>{openStatement({ path: docs })}}>
            <View style={Styles.Top}>
              <Text style={Styles.TextTop}>{docs}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}