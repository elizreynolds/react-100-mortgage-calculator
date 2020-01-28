import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super()

    this.state = {
      rate: '',
      balance: '',
      output: '',
      term: '15',
    }

    this.handleClick = this.handleClick.bind(this)
    //this.handleChange = this.handleChange.bind(this)
    this.handleBalanceChange = this.handleBalanceChange.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
  }

  handleClick(event) {
    console.log('clicked')
    this.setState ({
    balance: event.target.value })
  }
  handleBalanceChange(event) {
    this.setState ({
      balance: event.target.value
    })
  }
  handleRateChange(event) {
    this.setState ({
       rate: event.target.value})
    
  }
  handleTermChange(event) {
    this.setState ({
      change: event.targert.value
    })
  }
  render() {
    return (
      
      <div className='container'>
       
        <h1>Mortgage Calculator</h1>
     
    <label>Interest Rate</label>
      <input name='rate' type='number' placeholder='0' step='0.01' value={this.state.rate} onChange={this.handleChange}></input>
    <br></br>
      
    <label>Loan Balance</label>
      <input name='balance' type='number' placeholder='0' value={this.state.balance} onChange={this.handleChange}></input>
  <br></br>

    <label>Loan Term</label>
        <select name="Term" value={this.state.term} onChange={this.handleChange}>
            <option>15 year</option>
						<option>30 year</option>
        </select>
    <br></br>
    
      <button name ='submit' onClick={this.handleCalculation}>Submit</button>
      <div id='output' value={this.state.text}>${this.state.text}is the monthly payment</div>
      </div>
    );
  }
}
