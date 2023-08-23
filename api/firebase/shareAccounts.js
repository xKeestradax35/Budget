import { async } from "@firebase/util"
import { addDoc, arrayUnion, collection, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"
import { Auth, Firestore } from "./config"

export const getShareID = () => {
    const { currentUser } = Auth
    const query = getDoc(doc(Firestore, 'users', currentUser.uid))


    return query
}

export const invitebyShareID = ({ AccountID, name, ShareID }) => {
    const { currentUser } = Auth
    const data = {
        unread: [{
            title: 'Invitation',
            pedding: 'pedding',
            name: name,
            accountid: AccountID,
        }]
    }
    const query = setDoc(doc(Firestore, 'notifications', ShareID), data)

    return query
}


export const invitetions = ({ ShareID }) => {
    const query = doc(Firestore, 'notifications', ShareID)

    return query
}

export const acceptInvitation = ({ Name, AccountID, currentShareID }) => {
    const { currentUser } = Auth

    const data = {
        accounts: arrayUnion({ name: Name, uid: AccountID })
    }

    const queryAddStatement = updateDoc(doc(Firestore, 'users', currentUser.uid), data)

    queryAddStatement.then((r) => {
        denyInvitation({ ShareID: currentShareID, AccountID: AccountID })
    }).catch(e => {
        console.log(e)
    })

    return queryAddStatement
}

export const denyInvitation = async ({ ShareID, AccountID }) => {
    const query = await getDoc(doc(Firestore, 'notifications', ShareID))

    const invitetion = []

    invitetion.push(query.data().unread)

    const itemToRemoveIndex = invitetion[0].findIndex(function (item) {
        return item.accountid === AccountID;
    });

    // proceed to remove an item only if it exists.
    if (itemToRemoveIndex !== -1) {
        console.log(invitetion[0].splice(itemToRemoveIndex, 1))
    }

    const queryRemoveThisInvitation = await updateDoc(doc(Firestore, 'notifications', ShareID), {
        unread: invitetion[0]
    })

    return queryRemoveThisInvitation
}