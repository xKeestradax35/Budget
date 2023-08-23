import React from 'react'
import {View, TouchableOpacity, SafeAreaView } from 'react-native'
import { Styles } from '../../styles/Dashboard'
import { StatusBar } from 'expo-status-bar';
import AccountViewCard from '../components/account/AccountViewCard';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Dashboard({ navigation }) {
  /**
 * Header Options
 */
  useNavigation().setOptions({
    headerRight: () => (
      <View style={Styles.headerButtonView}>
        <TouchableOpacity onPress={() => { navigation.navigate('Notification') }}>
          <Icon name="message-outline" size={30} color="#688ea7" />
        </TouchableOpacity>
      </View>
    ),
  })

  return (
    <SafeAreaView>
        <AccountViewCard />
        <StatusBar />
    </SafeAreaView>
  )
}
