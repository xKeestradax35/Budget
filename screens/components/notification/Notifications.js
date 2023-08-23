import { onSnapshot } from '@firebase/firestore'
import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { acceptInvitation, denyInvitation, getShareID, invitetions } from '../../../api/firebase/shareAccounts'
import { Styles } from '../../../styles/Notifications'

export default function Notifications({ navigation, route }) {
    const [noti, setnoti] = useState([])
    const [shareId, setShareId] = useState()

    const shownotifications = async () => {

        const shareID = (await getShareID()).data().shareid
        const query = await invitetions({ ShareID: shareID })
        onSnapshot(query, (snap) => {
            setnoti(snap.data().unread)
        })
        setShareId(shareID)
        // console.log(noti)

    }
    useEffect(() => {
        shownotifications()

    }, [])

    const denyButton = ({ currentShareId, AccountID }) => {
        denyInvitation({ ShareID: currentShareId, AccountID: AccountID })
    }

    const acceptButton = ({ AccountID, Name, currentShareID }) => {
        acceptInvitation({ Name: Name, AccountID: AccountID, currentShareID: currentShareID })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={Styles.notifView}>
                    <View style={Styles.notifContainer}>
                        {noti ? noti.map((doc) => {
                            return (
                                <View style={Styles.nofitItems}>
                                    <View style={Styles.notifTop}>
                                        <Text>{doc.title}</Text>
                                        <View style={Styles.buttonView}>
                                            <TouchableOpacity style={[Styles.button, Styles.deny]}>
                                                <Text style={Styles.buttonText} onPress={() => { denyButton({ currentShareId: shareId, AccountID: doc.accountid }) }}>Deny</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={[Styles.button, Styles.accept]} onPress={() => { acceptButton({ AccountID: doc.accountid, Name: doc.name, currentShareID: shareId }) }}>
                                                <Text style={Styles.buttonText}>Accept</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={Styles.notifBottom}>
                                        <Text>Account: {doc.name}</Text>
                                        <Text>Account: {doc.uid}</Text>

                                    </View>
                                </View>
                            )
                        }) : <View style={{width:'100%', height: 100}}>
                            <Text>Sorry</Text>
                        </View>}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
