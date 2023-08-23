import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Dimensions, SafeAreaView, Button, ScrollView } from "react-native";
// import { Styles } from '../../../styles/AddAccount'
import { Styles } from '../../../styles/AccountSetting'
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from "expo-status-bar";
import { createANewAccount } from "../../../api/firebase/accounts";
import { invitebyShareID } from '../../../api/firebase/shareAccounts';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default function AddAccount({ navigation }) {
    useNavigation().setOptions({
        title: 'New Account',
        headerLeft: () => (
            <View style={Styles.headerButtonView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        ),
    })

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false)

    const [shareId, setShareId] = useState()
    const [name, setname] = useState('')

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        setShareId(data)
        setShowScanner(false)
    };

    switch (hasPermission) {
        case hasPermission === null:
            return <Text>Requesting for camera permission</Text>;
            break;
        case hasPermission === false:
            return <Text>No access to camera</Text>;

            break;
        default:
    }

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const addNewaccount = () => {
        if (name) {
            createANewAccount({ newAccount: name , shareId: shareId}).then(() => {
                navigation.goBack()
            })
        } else {
            alert('complate all field.')
        }
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: '100%' }}>
            <SafeAreaView style={Styles.Container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView bounces={false} style={{height: '100%'}}>
                        {showScanner ?
                            <View style={Styles.ScannerView}>
                                <BarCodeScanner
                                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                    style={Styles.BarCode}
                                />
                                <Icon name="scan-helper" size={155} color="white" style={{alignSelf:'center', bottom: '70%'}}/>
                                <TouchableOpacity style={{alignSelf:'center', bottom: '33%'}} onPress={() => {
                                    setShowScanner(false)
                                }}>
                                    <Icon name='close' size={28} color="#fff" />
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={{ flex: 1, height: Dimensions.get('screen').height, width: '100%' }}>
                                <View style={Styles.InputView}>
                                    <Text style={Styles.TextInput}>Account Name</Text>
                                    <TextInput keyboardType='ascii-capable' style={Styles.Input} placeholder="Account Name" value={name} onChangeText={(e) => { setname(e) }} />
                                </View>
                                <View style={Styles.InputView}>
                                    <Text style={Styles.TextInput}>Invite</Text>
                                    <View style={Styles.InputViewRow}>
                                        <TextInput keyboardType='ascii-capable' style={Styles.Input} placeholder="Type share id..." value={shareId} onChangeText={(e) => { setShareId(e) }} />
                                        <TouchableOpacity onPress={() => {
                                            setShowScanner(true)
                                            setScanned(false);
                                        }}>
                                            <Icon name="qrcode-scan" size={32} color="#688ea7" style={{ marginHorizontal: 5 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={[Styles.InputView, Styles.PositionCenter]}>
                                    <TouchableOpacity style={Styles.Button} onPress={addNewaccount}>
                                        <Text style={Styles.TextButton}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }

                        <StatusBar style="light" networkActivityIndicatorVisible={true} hideTransitionAnimation={true} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}