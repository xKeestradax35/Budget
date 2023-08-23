import { useState } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Styles } from '../../styles/Calculator'
import Buttons from '../components/calculator/Buttons'
export default function Calculator() {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState(null)

    const handleNumber = (value) => {
       setFirstNumber(firstNumber + value)
    }

    const handleOperation = (symbol) => {
        setOperation(symbol)
        setSecondNumber(firstNumber)
        setFirstNumber('')
    }

    const handleCleaner = () => {
        setFirstNumber('')
        setOperation('')
        setSecondNumber('')
        setResult(null)
    }

    const getResult = () => {
        let fixDecimal = null

        switch (operation) {
            case "+":
                handleCleaner()
                fixDecimal = parseFloat(secondNumber) + parseFloat(firstNumber)
                setResult(fixDecimal.toFixed(2))
                break;
            case "-":
                handleCleaner()
                fixDecimal = parseFloat(secondNumber) - parseFloat(firstNumber)
                setResult(fixDecimal.toFixed(2))
                break;
            case "*":
                handleCleaner()
                fixDecimal = parseFloat(secondNumber) * parseFloat(firstNumber)
                setResult(fixDecimal.toFixed(2))
                break;
            case "/":
                handleCleaner()
                fixDecimal = parseFloat(secondNumber) / parseFloat(firstNumber)
                setResult(fixDecimal.toFixed(2))
                break;
            default:
                handleCleaner()
                getResult(0)
                break;
        }
    }

    const firstNumberDisplay = () => {
        if (result !== null) {
            return (
                <Text style={Styles.resultText}>{result.toLocaleString()}</Text>
            )
        }
        if (firstNumber && firstNumber.length < 6) {
            return (
                <Text style={Styles.resultText}>{firstNumber}</Text>
            )
        }
        if (firstNumber === '') {
            return (
                <Text style={Styles.resultText}>{'0'}</Text>
            )
        }
        if (firstNumber > 5 && firstNumber.length < 8) {
            return (
                <Text style={Styles.resultText}>{firstNumber}</Text>
            )
        }
        if (firstNumber > 7) {
            return (
                <Text style={Styles.resultText}>{firstNumber}</Text>
            )
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.topView}>
                <View style={Styles.subOperation}>
                    <Text style={Styles.secondNumber}>{secondNumber}</Text>
                    <Text style={Styles.operation}>{operation}</Text>
                </View>
                <View>
                {firstNumberDisplay()}
                </View>
            </View>
            <View style={Styles.centerView}>
                <View style={Styles.row}>
                    <Buttons title={'AC'} onPress={() => { handleCleaner() }} />
                    <Buttons title={'+/-'} />
                    <Buttons title={'%'} onPress={() => { handleOperation('%') }} />
                    <Buttons title={'/'} onPress={() => { handleOperation('/') }} />
                </View>
                <View style={Styles.row}>
                    <Buttons title={'7'} onPress={() => { handleNumber('7') }} />
                    <Buttons title={'8'} onPress={() => { handleNumber('8') }} />
                    <Buttons title={'9'} onPress={() => { handleNumber('9') }} />
                    <Buttons title={'x'} onPress={() => { handleOperation('*') }} />
                </View>
                <View style={Styles.row}>
                    <Buttons title={'4'} onPress={() => { handleNumber('4') }} />
                    <Buttons title={'5'} onPress={() => { handleNumber('5') }} />
                    <Buttons title={'6'} onPress={() => { handleNumber('6') }} />
                    <Buttons title={'-'} onPress={() => { handleOperation('-') }} />
                </View>
                <View style={Styles.row}>
                    <Buttons title={'1'} onPress={() => { handleNumber('1') }} />
                    <Buttons title={'2'} onPress={() => { handleNumber('2') }} />
                    <Buttons title={'3'} onPress={() => { handleNumber('3') }} />
                    <Buttons title={'+'} onPress={() => { handleOperation('+') }} />
                </View>
                <View style={Styles.row}>
                    <Buttons title={'0'} size={'48%'} onPress={() => { handleNumber('0') }} />
                    <Buttons title={'.'} onPress={() => { handleNumber('.') }} />
                    <Buttons title={'='} onPress={() => { getResult() }} />
                </View>
            </View>
        </SafeAreaView>
    )
}
