import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'

const TransactionDetails = (props) => {
  const { transaction, auth } = props;
  
  if (!auth.uid) return <Redirect to='/signin'/>
  if (transaction) {
    return (
      <div className="container section project-details">
        <p>Transaction amount: {transaction.amount}</p>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const transactions = state.firestore.data.transactions;
  const transaction = transactions ? transactions[id] : null
  return {
    transaction: transaction,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'transactions'
  }])
)(TransactionDetails)