import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Styles } from '../../../styles/CalculatorButton'

export default function Buttons({ title, onPress, size }) {
    return (
        <TouchableOpacity
            style={[
                Styles.numbers,
                size ? { width: size } : null
            ]}
            onPress={onPress}>
            <Text style={Styles.numbersText}>{title}</Text>
        </TouchableOpacity>
    )
}
