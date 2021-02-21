import authReducer from './authReducer'
import transactionReducer from './transactionReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    transaction: transactionReducer,
    firestore: firestoreReducer
});

export default rootReducer