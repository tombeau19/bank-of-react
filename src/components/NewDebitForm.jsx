import React, { Component } from 'react';

class NewDebitForm extends Component {

    state = {
        newDebit: {
            description: '',
            amount: 0,
            date: ''
        }
    }

    handleChange = (event) => {
        const newDebit = { ...this.state.newDebit }
        newDebit[event.target.name] = event.target.value
        this.setState({ newDebit: newDebit })
    }

    handleSubmit = (event) => {
        event.prevenDefault()
        this.props.addDebit(this.state.newDebit)

        const emptyDebit = {
            description: '',
            amount: '',
            date: ''
        }
        this.setState({ newDebit: emptyDebit })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input onChange={this.handleChange} name="description" type="text" placeholder="description" value={this.state.newDebit.description} />
                </div>
                <div>
                    <input onChange={this.handleChange} name="amount" type="text" placeholder="amount" value={this.state.newDebit.amount} />
                </div>
                <div>
                    <input onChange={this.handleChange} name="date" type="text" placeholder="date" value={this.state.newDebit.date} />
                </div>
                <div>
                    <button>Add a Debit</button>
                </div>
            </form>
        );
    }
}

export default NewDebitForm;