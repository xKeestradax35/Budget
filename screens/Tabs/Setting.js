import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, SafeAreaView, Dimensions } from 'react-native'
import { Styles } from '../../styles/Setting.js'
import { signOUT } from '../../api/firebase/auth.js'
import ShareIDQR from '../components/setting/ShareIDQR'

export default function Setting({ navigation }) {
  const logOut = () => {
    signOUT().then(r => {
      navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    }).catch(e => {
      console.log(e)
    })
  }
  return (
    <SafeAreaView style={{ height: Dimensions.get('screen').height }}>
      <ScrollView style={Styles.ScrollView}>
        <ShareIDQR />
        {/* <SettingFlatlist /> */}
        <View style={Styles.SignOutView}>
          <TouchableOpacity style={Styles.SignOutButton} onPress={() => { logOut() }}>
            <Text style={Styles.SignOutButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}
