import authReducer from './authReducer'
import transactionReducer from './transactionReducer'
import { combineReducers } from 'redux'
import { firestoreRducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    transaction: transactionReducer,
    firestore: firestoreRducer
});

export default rootReducer