export const  createTransaction = (transaction) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('transactions').add({
            ...transaction,
            time: new Date()
        }).then(() => { 
            dispatch({ type: 'CREATE_TRANSACTION', transaction})
        }).catch((err) => {
            dispatch({ type: 'CREAT_TRANSACTION_ERROR', err})
        })

       
    }
}