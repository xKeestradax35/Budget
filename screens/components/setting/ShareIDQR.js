import * as Clipboard from 'expo-clipboard';
import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getShareID } from '../../../api/firebase/shareAccounts';
import { Styles } from '../../../styles/AccountQR'

export default function ShareIDQR() {
    const [shareID, setShareID] = useState()

    const displayShareID = async () => {
        const q = await getShareID()

        if (q.exists) {
            console.log(q.data())
            setShareID(q.data().shareid)
        }
    }
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(shareID).then(() => {
        })
    };
    useEffect(() => {
        displayShareID()
    }, [shareID])
    return (
        <SafeAreaView style={Styles.SafeAreaView}>
            <View style={Styles.QRView}>
                <View style={Styles.QRCardview}>
                    <QRCode
                        size={125}
                        value={shareID}
                    />
                </View>
            </View>
            <View style={Styles.ShareIDView}>
                <TouchableOpacity style={Styles.CopyButton} onPress={copyToClipboard}>
                    <Text style={Styles.CopyButtonText}>{shareID}</Text>
                    <Icon style={{ marginHorizontal: 5 }} name='content-copy' size={16} color="#688ea7" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
