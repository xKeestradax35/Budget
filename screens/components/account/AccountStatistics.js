import React, { useState } from 'react'
import { SafeAreaView, View, Text, Pressable } from 'react-native'
import { Styles } from '../../../styles/AccountStatistics'

export default function AccountStatistics({ Total, isSplit }) {

    const [split, setSplit] = useState(isSplit)
    return (
        <SafeAreaView style={Styles.safearea}>
            <View style={Styles.view}>
                <View style={Styles.cardview}>
                    <Text style={Styles.title}>Total</Text>
                    <Text style={Styles.subtitle}>${Total}</Text>
                </View>
                {/* {split ?
                    <Pressable style={Styles.cardview} onPress={() => {
                        setSplit(false)
                    }}>
                        <Text style={Styles.title}>Split by 2</Text>
                        <Text style={Styles.subtitle}>${parseFloat(Total / 2).toFixed(2)}</Text>
                    </Pressable> :
                    <Pressable style={Styles.cardview} onPress={() => {
                        setSplit(true)
                    }}>
                        <Text>Split off</Text>
                    </Pressable>
                } */}
            </View>
        </SafeAreaView>
    )
}
