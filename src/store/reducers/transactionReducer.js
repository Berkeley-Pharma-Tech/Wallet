const initState = {}

const transactionReducer = (state=initState , action) => {
    switch(action.type) {
        case 'CREATE_TRANSACTION':
            console.log('create transaction', action.transaction);
            return state;
        case 'CREATE_TRANSACTION_ERROR':
            console.log('create transaction error', action.err);
            return state;
        default:
            return state
    }
}
export default transactionReducer