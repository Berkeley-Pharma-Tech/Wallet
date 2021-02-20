export const  createTransaction = (transaction) => {
    return (dispatch, getState) => {
        // make async call to database


        dispatch({ type: 'CREATE_TRANSACTION', transaction})
    }
}