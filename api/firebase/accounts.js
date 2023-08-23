import { arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, onSnapshot, query, orderBy, arrayRemove } from 'firebase/firestore'
import { Auth, Firestore } from './config'
import uuid from 'react-uuid';
import moment from 'moment';
import { async } from '@firebase/util';
import { invitebyShareID } from './shareAccounts';



/**
 * @function createANewAccount
 * @description This function will create a new account/statement
 * @vars userId: string, name: string, invite: bool
 * @return null
 * @update 01/27/23 @5:30pm
*/
export const createANewAccount = ({ newAccount, shareId }) => {
    const { currentUser } = Auth
    const generatedUUID = uuid()
    const data = {
        accounts: arrayUnion({ name: newAccount, uid: generatedUUID })
    }
    const queryAddAccount = updateDoc(doc(Firestore, 'users', currentUser.uid), data)

    switch (shareId) {
        case shareId:
            return queryAddAccount.then(() => {
                invitebyShareID({ AccountID: generatedUUID, name: newAccount, ShareID: shareId })
            })
            break;

        case !shareId:
            return queryAddAccount
            break;

        default:
    }
}

/**
 * @function getChartAccounts
 * @description This function will create a new account/statement
 * @vars userId: string
 * @return null
 * @update 01/27/23 @4:30pm
*/
export const getChartAccounts = async ({ items }) => {
    const { currentUser } = Auth
    const e = []
    for (var x = 0; x < items.length; x++) {
        const tmp = await getDocs(collection(Firestore, 'accounts', currentUser.uid, items[x].uid))
    }
}

/**
 * @function getAccounts
 * @description This function will create a new account/statement
 * @vars userId: string
 * @return quey
 * @update 01/27/23 @4:30pm
*/
export const getAccounts = () => {
    const { currentUser } = Auth
    const query = doc(Firestore, 'users', currentUser.uid)
    return query
}

/**
 * @function deleteAccount
 * @description This function will delete an existe account/statement
 * @vars userId: string, accountID: string
 * @return null
 * @update 01/29/23 8:42pm
*/
export const deleteAccount = async ({ AccountID }) => {
    const { currentUser } = Auth
    const query = await getDoc(doc(Firestore, 'users', currentUser.uid))

    const accounts = []

    accounts.push(query.data().accounts)

    const itemToRemoveIndex = accounts[0].findIndex(function (item) {
        return item.uid === AccountID;
    });

    // proceed to remove an item only if it exists.
    if (itemToRemoveIndex !== -1) {
    }


    const queryUpdateStatements = await updateDoc(doc(Firestore, 'users', currentUser.uid), {
        accounts: accounts[0]
    })


    return queryUpdateStatements
}

/**
 * @function getTransaction
 * @description This function will create a new account/statement
 * @vars userId: string, name: string, invite: bool
 * @return query
 * @update 01/28/23 @11:30am
*/
export const getTransaction = ({ AccountID }) => {
    const q = query(collection(Firestore, 'accounts', AccountID, moment().format('MMMM, YYYY')), orderBy('date', 'desc'))// Query to get all transaction

    return q
}

/**
 * @function getTransaction
 * @description This function will create a new account/statement
 * @vars userId: string, name: string, invite: bool
 * @return query
 * @update 01/28/23 @11:30am
*/
export const getStatementTransactions = ({ AccountID, Path }) => {
    const q = query(collection(Firestore, 'accounts', AccountID, Path), orderBy('date', 'desc'))// Query to get all transaction

    return q
}
/**
 * @function addATransaction
 * @description This function will add an new transaction
 * @vars accountID: string, userID: string, item: string, amount: number, date: string, 
 * @return null
 * @update 01/28/23 12:43am
*/
export const addATransaction = ({ AccountID, Item, Price, Date }) => {
    const data = {
        item: Item,
        price: Price,
        date: Date,
        added: moment().format(),
    }
    const query = doc(collection(Firestore, 'accounts', AccountID, moment(Date).format('MMMM, YYYY')))
    return setDoc(query, data).then(()=>{
        updateDoc(doc(Firestore, 'accounts', AccountID), {
            statements: arrayUnion(moment(Date).format('MMMM, YYYY'))
        })
    })
}

/**
 * @function modifyTransaction
 * @description This function will modify an especifi transaction
 * @vars accountID: string, userID: string, transactionID: string, item: string, amount: number, date: string, 
 * @return query
 * @update 01/28/23 12:45am
*/
export const modifyTransaction = ({ AccountID, Item, Price, Date, ID }) => {
    const data = {
        item: Item,
        price: Price,
        date: Date,
        modify: moment().format(),
    }
    const query = updateDoc(doc(Firestore, 'accounts', AccountID, moment(Date).format('MMMM, YYYY'), ID), data)
    return query
}

/**
 * @function deleteATransaction
 * @description This function will delete an especifi transaction
 * @vars accountID: string, userID: string, transactionID: string
 * @return query 
 * @update 01/28/23 12:45am
*/
export const deleteATransaction = ({ AccountID, ID, Date }) => {
    const query = deleteDoc(doc(Firestore, 'accounts', AccountID, moment(Date).format('MMMM, YYYY'), ID))
    return query
}

/**
 * @function getStatements
 * @description This function will get statements of account
 * @vars accountID: string,
 * @return query 
 * @update 01/28/23 12:45am
*/
export const getStatements = ({ AccountID }) => {
    const query = getDoc(doc(Firestore, 'accounts', AccountID),orderBy('date', 'desc'))
    return query
}