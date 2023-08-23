import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, ScrollView, TextInput, Keyboard, Platform, Text, StyleSheet, Button, Dimensions } from 'react-native'
import { Styles } from '../../../styles/AccountSetting'
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { deleteAccount } from '../../../api/firebase/accounts';
import { invitebyShareID } from '../../../api/firebase/shareAccounts';

export default function ({ navigation, route }) {
    const { Name, AccountID } = route.params

    useNavigation().setOptions({
        title: `${Name} Setting`, // set a new title
        headerLeft: () => ( //cancel button to go back
            <View style={Styles.headerButtonView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        ),
    })

    const [shareId, setShareId] = useState()

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false)


    const handleBarCodeScanned = ({data }) => {
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

    const invite = () => {
        invitebyShareID({ AccountID: AccountID, name: Name, ShareID: shareId }).then(() => {
            navigation.goBack()
        }).catch(e => {
            console.log(e)
        })
    }

    const deleteAccoount = () => {
        deleteAccount({ AccountID }).then(() => { navigation.navigate('Dashboard') }).catch(e => { console.log(e) })
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ height: Dimensions.get('screen').height, }}>
            <SafeAreaView style={Styles.Container} removeClippedSubviews={true}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView bounces={false} style={{ marginBottom: 65, height: Dimensions.get('screen').height, }}>
                        {showScanner ?
                            <View style={Styles.ScannerView}>
                                <BarCodeScanner
                                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                                    style={Styles.BarCode}
                                />
                                <TouchableOpacity style={{ position: 'absolute', bottom: 40 }} onPress={() => {
                                    setShowScanner(false)
                                }}>
                                    <Icon name='close' size={28} color="#fff" />
                                </TouchableOpacity>
                            </View> :
                            <View style={{ flex: 1, height: Dimensions.get('screen').height, width: '100%' }}>
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
                                    <TouchableOpacity style={Styles.Button} onPress={invite}>
                                        <Text style={Styles.TextButton}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[Styles.InputView, Styles.PositionCenter]}>
                                    <TouchableOpacity style={Styles.ButtonDelete} onPress={deleteAccoount}>
                                        <Text style={Styles.TextButton}>Delete Account</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>}
                        <StatusBar style="light" networkActivityIndicatorVisible={true} hideTransitionAnimation={true} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}