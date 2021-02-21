const initState = {
    transactions: [
        {id: 1, amount: 50, from: 111111, to: 22222, time: '01/01/2021'},
        {id: 2, amount: 20, from: 222222, to: 11111, time: '01/02/2021'}
    ]
}
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