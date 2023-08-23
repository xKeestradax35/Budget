import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Dimensions, Modal, Pressable } from 'react-native'
import { signINWithEmailAndPass } from '../api/firebase/auth'
import { Styles } from '../styles/Login'
import { Auth } from '../api/firebase/config'
import { Path, Svg } from 'react-native-svg'
import { ModalStyles } from '../styles/Modal'


export default function Login({ navigation }) {
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const tmpStyle = {
    svgHeigt: Dimensions.get('screen').height / 1.6,
    bgHeight: '25%',
    textSignUp: '#323031',
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [miss, setMiss] = useState([{ name: '', lastname: '', email: '', password: '' }])


  const signUp = () => {
    navigation.reset({ index: 0, routes: [{ name: 'SignUP' }] })
  }
  const signIn = () => {
    if (!email && !password) {
      setModalVisible(true)
      setModalMessage(`Please fill the form.`)
      setMiss({ name: '#ea526f', lastname: '#ea526f', email: '#ea526f', password: '#ea526f' })
    }
    else {

      if (!email) {
        setMiss({ email: '#ea526f' })
      }

      if (!password) {
        setMiss({ password: '#ea526f' })
      }

      if (email && password) {
        signINWithEmailAndPass({ email: email, password: password })
      }
    }
  }

  const autoLogin = () => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({ index: 0, routes: [{ name: 'Home' }] })
      }
    })
  }



  useEffect(() => {
    autoLogin()
  }, [navigation])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={Styles.viewBackground}>
          <View style={Styles.Top}>
            <View style={[Styles.Box, { height: tmpStyle.bgHeight }]}>
              <Svg width={Dimensions.get('screen').width} height={tmpStyle.svgHeigt} viewBox="0 0 1440 590" style={Styles.topWave}>
                <Path d="M 0,600 C 0,600 0,150 0,150 C 66.33910162002944,126.99447717231223 132.67820324005888,103.98895434462445 187,103 C 241.32179675994112,102.01104565537555 283.6262886597939,123.03865979381445 335,120 C 386.3737113402061,116.96134020618555 446.8166421207658,89.85640648011783 513,100 C 579.1833578792342,110.14359351988217 651.1071428571429,157.53571428571428 724,160 C 796.8928571428571,162.46428571428572 870.7547864506626,120.00073637702504 931,124 C 991.2452135493374,127.99926362297496 1037.8737113402062,178.46134020618555 1092,174 C 1146.1262886597938,169.53865979381445 1207.7503681885123,110.15390279823269 1267,97 C 1326.2496318114877,83.84609720176731 1383.1248159057438,116.92304860088365 1440,150 C 1440,150 1440,600 1440,600 Z" fill="#688ea7" fillOpacity={0.4} transform="rotate(-180 720 300)" />

                <Path d="M 0,600 C 0,600 0,300 0,300 C 47.09664948453609,328.05927835051546 94.19329896907217,356.11855670103097 148,347 C 201.80670103092783,337.88144329896903 262.3234536082474,291.58505154639175 326,272 C 389.6765463917526,252.41494845360825 456.5128865979382,259.5412371134021 522,277 C 587.4871134020618,294.4587628865979 651.625,322.25000000000006 722,314 C 792.375,305.74999999999994 868.9871134020618,261.4587628865979 930,257 C 991.0128865979382,252.5412371134021 1036.4265463917525,287.91494845360825 1090,310 C 1143.5734536082475,332.08505154639175 1205.3067010309278,340.88144329896903 1265,337 C 1324.6932989690722,333.11855670103097 1382.346649484536,316.55927835051546 1440,300 C 1440,300 1440,600 1440,600 Z" fill="#688ea7" fillOpacity={0.5} transform="rotate(-180 720 300)" />

                <Path d="M 0,600 C 0,600 0,450 0,450 C 61.15040500736379,442.3114874815906 122.30081001472757,434.62297496318115 173,451 C 223.69918998527243,467.37702503681885 263.9471649484536,507.8195876288659 326,498 C 388.0528350515464,488.1804123711341 471.91053019145807,428.0986745213549 534,411 C 596.0894698085419,393.9013254786451 636.4107142857142,419.78571428571433 694,447 C 751.5892857142858,474.21428571428567 826.4466126656848,502.7584683357879 890,490 C 953.5533873343152,477.2415316642121 1005.8028350515465,423.180412371134 1074,407 C 1142.1971649484535,390.819587628866 1226.3420471281295,412.51988217967596 1290,426 C 1353.6579528718705,439.48011782032404 1396.8289764359351,444.740058910162 1440,450 C 1440,450 1440,600 1440,600 Z" fill="#688ea7" fillOpacity={1} transform="rotate(-180 720 300)" />
              </Svg>
            </View>
          </View>
          <View style={Styles.viewTitle}>
            <Text style={Styles.title}>Budget</Text>
          </View>
          <View style={Styles.viewInput}>
            <TextInput keyboardType='email-address' autoCorrect={false} style={Styles.textInput} placeholder="Email" placeholderTextColor={miss.email} value={email} onChangeText={(e) => { setemail(e) }}></TextInput>
            <TextInput keyboardType='default' secureTextEntry={true} autoCorrect={false} style={Styles.textInput} placeholder="Password" placeholderTextColor={miss.password} value={password} onChangeText={(e) => { setpassword(e) }}></TextInput>
          </View>
          <View style={Styles.viewInput}>
            <TouchableOpacity style={Styles.touchableSignIN} onPress={signIn}>
              <Text style={Styles.touchableSignINText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.touchableSignUP} onPress={signUp}>
              <Text style={[Styles.touchableSignUPText, { color: tmpStyle.textSignUp }]}>I don't have an account.</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={ModalStyles.container}>
              <View style={ModalStyles.view}>
                <View style={ModalStyles.viewrow}>
                  <Text style={ModalStyles.title}>Oops...</Text>
                </View>
                <View style={ModalStyles.viewrow}>
                  <Text style={ModalStyles.message}>{modalMessage}</Text>
                </View>
                <View style={ModalStyles.viewrow}>
                  <Pressable onPress={() => { setModalVisible(!modalVisible) }} style={ModalStyles.button}>
                    <Text style={ModalStyles.buttonText}>Close</Text>

                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
          <StatusBar />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
