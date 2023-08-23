import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ModalStyles } from '../../../styles/Modal';
import { Modal, Text, Pressable, View } from 'react-native'



const MyContext = createContext(false);


function ModalAlert({message}) {
    const { isVisible, setIsVisible } = useContext(false)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                !setIsVisible
            }}>
            <View style={ModalStyles.container}>
                <View style={ModalStyles.view}>
                    <View style={ModalStyles.viewrow}>
                        <Text style={ModalStyles.title}>Oops...</Text>
                    </View>
                    <View style={ModalStyles.viewrow}>
                        <Text style={ModalStyles.message}>{message}</Text>
                    </View>
                    <View style={ModalStyles.viewrow}>
                        <Pressable onPress={() => {
                            !setIsVisible
                        }} style={ModalStyles.button}>
                            <Text style={ModalStyles.buttonText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export { ModalAlert, MyContext }
