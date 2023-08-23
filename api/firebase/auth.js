import { Auth, Firestore } from './config'
import { setDoc, doc } from 'firebase/firestore'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, deleteUser } from 'firebase/auth'
import uuid from 'react-native-uuid';
import moment from 'moment';
/**
 * @function signINWithEmailAndPass
 * @description If the user types correctly their email and password will sign in successfully.
 * @vars email: string, password: string,
 * @return null
 * @update 01/08/23 @4:30pm
*/
export const signINWithEmailAndPass = ({ email, password }) => {
    signInWithEmailAndPassword(Auth, email, password).then(r => {
        console.log(true)
    }).catch(e => {
        switch (e.code) {
            case 'auth/missing-email':
                alert('Please type your email.')
                break;
            case 'auth/user-not-found':
                alert('Email not found.')
                break;
            case 'auth/internal-error':
                alert('Please checks.')
                break;
            case 'auth/wrong-password':
                alert('Wrong password.')
                break;
            default:
        }
        console.log(e)
    })
}

/**
 * @function signUPWithEmailAndPass
 * @description The new user will need to fill in these four required fields.
 * @vars name: string, lastname: string, email: string, password: string,
 * @return null
 * @update 01/08/23 @4:30pm
*/
export const signUPWithEmailAndPass = ({ name, lastname, email, password }) => {

    createUserWithEmailAndPassword(Auth, email, password).then((r) => {
        const uid = r.user.uid
        const userDatas = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            uid: uid,
            accounts: [{
                name: 'Expenses',
                uid: uid
            }],
            shareid: uuid.v4()
        }
        const accountData = {
            statements: [moment().format('YYYY-MMMM')],
            access: [{
                name: name,
                lastname: lastname,
                uid: uid,
            }],
        }
        // adding the new user into the users database
        setDoc(doc(Firestore, 'users', uid), userDatas).then(r => {
        }).catch(e => {
            console.log(e)
        })
        // adding statement into the account database
        setDoc(doc(Firestore, 'accounts', uid), accountData).then(r => {
        }).catch(e => {
            console.log(e)
        })

    }).catch(e => {
        switch (e.code) {
            case 'auth/invalid-email':
                alert('Your email is invalid. Please checks your email.')
                break;
            case 'auth/email-already-in-use':
                alert('This email already in use.')
                break;
            case 'auth/weak-password':
                alert('Your password is weak.')
                break;
            case 'auth/internal-error':
                alert('')
                break;
            default:
        }
        console.log(e)
    })
}

/**
 * @function signOUT
 * @description 
 * @vars 
 * @return null
 * @update 01/08/23 @4:30pm
*/
export const signOUT = () => {
    return Auth.signOut()
}

/**
 * @function removeUser
 * @description We will remove the user from our databases, such as Account, User, and others.
 * @vars name: string, lastname: string, email: string, password: string,
 * @return null
 * @update 01/08/23 @4:30pm
*/
export const removeUser = () => {
    const user = Auth.currentUser
    deleteUser(user).then(r => {
        alert('user deleted')
    }).catch(e => {
        console.log(e)
    })
}

// export const getCurrentUser = () =>{
//     return Auth.currentUser.uid
// }

