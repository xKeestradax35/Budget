import { useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity, TextComponent, Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native'
import { Styles } from '../../../styles/AddTransaction'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment'
import { addATransaction, deleteATransaction, modifyTransaction } from '../../../api/firebase/accounts'
import CurrencyInput from 'react-native-currency-input';

export default function ModifyTransaction({ navigation, route }) {
    const { AccountID, itemr, pricer, dater, id } = route.params //import uid of account
    useNavigation().setOptions({
        title: 'Add Transaction', // set a new title
        headerLeft: () => ( //cancel button to go back
            <View style={Styles.headerButtonView}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        ),
    })

    const [date, setDate] = useState(moment(dater).format('YYYY-MM-DD')); // set current day with this format Year-Month-Day
    const [item, setItem] = useState(itemr);
    const [price, setPrice] = useState(pricer);
    const [value, setValue] = useState(parseFloat(pricer));

    const UpdateTrans = () => {
        modifyTransaction({ AccountID: AccountID, Item: item, Price: parseFloat(price.split('$').filter(Boolean)).toFixed(2), Date: date, ID: id }).then(e => {
            //New transaction it adding to this account with succefully
            navigation.goBack()
        }).catch((e) => {
            //Deploy which error it's via console
            console.log(e)
        })
    }

    const DeleteTrans = async () => {
        await deleteATransaction({AccountID: AccountID, Date: date, ID: id}).then(r => {
            navigation.goBack();
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
            <SafeAreaView style={Styles.Container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView bounces={false} style={{ flex: 1, }}>
                        <View style={Styles.InputView}>
                            <Text style={Styles.TextInput}>Item</Text>
                            <TextInput keyboardType='ascii-capable' style={Styles.Input} placeholder="Item" value={item} onChangeText={(e) => { setItem(e) }} />
                        </View>
                        <View style={Styles.InputView}>
                            <Text style={Styles.TextInput}>Price</Text>
                            <CurrencyInput
                                style={Styles.Input}
                                value={value}
                                onChangeValue={setValue}
                                prefix="$"
                                delimiter=","
                                separator="."
                                precision={2}
                                onChangeText={(formattedValue) => {
                                    setPrice(formattedValue)
                                }}
                            />
                        </View>
                        <View style={[Styles.InputView]}>
                            <Text style={Styles.TextInput}>Date</Text>
                            <DatePicker
                                options={{
                                    backgroundColor: '#688ea7',
                                    textHeaderColor: '#fdffff',
                                    textDefaultColor: '#fdffff',
                                    selectedTextColor: '#fff',
                                    mainColor: '#323031',
                                    textSecondaryColor: '#fdffff',
                                    borderColor: 'rgba(122, 146, 165, 0.1)',
                                }}
                                current={date}
                                selected={date}
                                onSelectedChange={(e) => { setDate(moment(e, "YYYY/MM/DD").format("YYYY-MM-DD")) }}                                 
                                mode="calendar"
                                minuteInterval={30}
                                style={{ borderRadius: 5 }}
                            />
                        </View>
                        <View style={[Styles.InputView, Styles.PositionCenter]}>
                            <TouchableOpacity style={Styles.Button} onPress={UpdateTrans}>
                                <Text style={Styles.TextButton}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[Styles.InputView, Styles.PositionCenter]}>
                            <TouchableOpacity style={[Styles.Button, {backgroundColor:'#ea526f'}]} onPress={DeleteTrans}>
                                <Text style={Styles.TextButton}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        <StatusBar style="auto" networkActivityIndicatorVisible={true} hideTransitionAnimation={true} />
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </KeyboardAvoidingView >
    )
}
