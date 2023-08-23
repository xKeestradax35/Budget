import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
const firebaseConfig = {

    apiKey: "AIzaSyBletlUHqDbGb4fcti980mMGDKmXGyx2Uc",

    authDomain: "owlencoder-budget.firebaseapp.com",

    databaseURL: "https://owlencoder-budget-default-rtdb.firebaseio.com",

    projectId: "owlencoder-budget",

    storageBucket: "owlencoder-budget.appspot.com",

    messagingSenderId: "834523685952",

    appId: "1:834523685952:web:20c49b95a579e135b52ba5",

    measurementId: "G-67WZ6CNDYV"

};

const app = initializeApp(firebaseConfig)

export const Firestore = getFirestore(app)
export const Storage = getStorage(app)
export const Auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})
