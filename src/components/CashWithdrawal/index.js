import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="icon">
              <p className="icon-name"> {initial} </p>
            </div>
            <p className="name"> {name} </p>
          </div>
          <div className="balance-container">
            <p className="para"> Your Balance </p>
            <div className="balance">
              <p className="amount"> {balance} </p>
              <p className="unit"> In Rupees </p>
            </div>
          </div>
          <p className="withdraw"> Withdraw </p>
          <p className="para"> CHOOSE SUM (IN RUPEES) </p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
