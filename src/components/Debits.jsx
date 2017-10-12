import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewDebitForm from './NewDebitForm'

class Debits extends Component {
    render() {

        const totalDebits = this.props.debits.reduce((totalDebits, debit) => {
            return totalDebits + debit.amount
        }, 0)

        const totalCredits = this.props.credits.reduce((totalCredits, credit) => {
            return totalCredits + credit.amount
        }, 0)

        const totalBalance = (totalCredits - totalDebits)

        const accountBalance = totalBalance.toFixed(2)

        const debitList = this.props.debits.map((charge) => {
            return (
                <li>
                    <div>description: {charge.description}</div>
                    <div>amount: {charge.amount}</div>
                    <div>date: {charge.date}</div>
                    <br /><br />
                </li>
            )
        })

        return (
            <div>
                <h3>Debits</h3>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <NewDebitForm addDebit={this.props.addDebit} />
                <div>Account Balance: {accountBalance}</div>
                <ol>
                    {debitList}
                </ol>

            </div>
        )
    }
}

export default Debits