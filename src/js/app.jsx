import React from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor() {
    super()

    this.state = {
      rate: '',
      balance: '',
      output: '',
      term: '',
      monthlyPayment: '0',
    }

    this.handleCalculation = this.handleCalculation.bind(this)
    //this.handleChange = this.handleChange.bind(this)
    this.handleBalanceChange = this.handleBalanceChange.bind(this)
    this.handleRateChange = this.handleRateChange.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    //this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleBalanceChange(event) {
    this.setState ({
      balance: event.target.value})
  }
  handleRateChange(event) {
    this.setState ({
       rate: event.target.value})
  }
  handleTermChange(event) {
    this.setState ({
      change: event.targert.value})
  }

  handleCalculation(event) {
  
  let rate = Number(this.state.rate)/1200;
  let balance = Number(this.state.balance);
  let term = Number(this.state.term)*12;
  let paymentDue = Number((balance * rate / (1 - (Math.pow(1/(1 + rate), term)))).toFixed(2));
  

  this.setState({
    output: `$${paymentDue} is your monthly payment.`
  });
  console.log("working", output);
  }
  

  render() {
    return (
      
      <div className='container'>
       
        <h1>Mortgage Calculator</h1>
     
    <label>Interest Rate</label>
      <input name='rate' type='number' placeholder='0' step='0.01' value={this.state.rate} onChange={this.handleRateChange}></input>
    <br></br>
      
    <label>Loan Balance</label>
      <input name='balance' type='number' placeholder='0' value={this.state.balance} onChange={this.handleBalanceChange}></input>
  <br></br>

    <label>Loan Term</label>
        <select name="Term" value={this.state.term} onChange={this.handleTermChange}>
            <option>15 year</option>
						<option>30 year</option>
        </select>
    <br></br>
    
      <button name ='submit' onClick={this.handleCalculation}>Submit</button>
      <div name ='output' id='output' value={this.setState}>  {this.state.output} </div>
      
      </div>
      
    );
  }
}
