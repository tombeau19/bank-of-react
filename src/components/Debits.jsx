import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Debits extends Component {
    render() {

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
                <ol>
                    {debitList}
                </ol>

            </div>
        )
    }
}

export default Debits;