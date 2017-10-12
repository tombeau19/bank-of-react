import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AccountBalance extends Component {

    render() {

        const totalDebits = this.props.debits.reduce((totalDebits, debit) => {
            return totalDebits + debit.amount
        }, 0)

        const totalCredits = this.props.credits.reduce((totalCredits, credit) => {
            return totalCredits + credit.amount
        }, 0)

        const totalBalance = (totalCredits - totalDebits)

        const accountBalance = totalBalance.toFixed(2)

        return (
            <div>
                <h3>Balance: {accountBalance}</h3>
                <h4>Debits: {totalDebits}</h4>
                <h4>Credits: {totalCredits}</h4>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default AccountBalance;
