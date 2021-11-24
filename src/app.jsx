import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: 0,
      amountReceived: 0,
      output: '',
      change: []
    };
    this.calculateChange = this.calculateChange.bind(this);
    this.determineType = this.determineType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateChange() {
    // get amount due and received from user
    const due = this.state.amountDue;
    const received = this.state.amountReceived;
    const result = received - due;
    return result;
  }

  // determines the bill and coin denomination
  determineType(result) {
    const changeDenomination = [];
    const moneyType = [20, 10, 5, 1, .25, .10, .05, .01];
    // loop through each money denomination find out the quantity of each
    moneyType.forEach((changeType) => {
      // if the change is less than the denomination value, push a 0 in the array
      if (changeType > result) {
        changeDenomination.push(0);
      } else {
        // divide the change into the denomination value, push the quotient
        changeDenomination.push(Math.floor(result / changeType));
        // Modulo the change with the denomination value, the remainder will be the new result
        result = (result % changeType);
      }
    });
    this.setState({ change: `${changeDenomination}` });
    return changeDenomination;
  }

// execute on click
  handleClick() {
    const result = this.calculateChange();
    const element = document.getElementById('toggleMe');
    if (result >= 0) {
      this.setState({ output: `The total change due is $${result.toFixed(2)}` });
      element.classList.remove('alert-danger');
      element.classList.add('alert-success');
    } else {
      this.setState({ output: `$${Math.abs(result)} of additional money is owed.` });
      element.classList.add('alert-danger');
      element.classList.remove('alert-success');
    }
    const change = this.determineType(result);

    document.getElementById('20dollars-output').innerHTML = `${change[0]}`;
    document.getElementById('10dollars-output').innerHTML = `${change[1]}`;
    document.getElementById('5dollars-output').innerHTML = `${change[2]}`;
    document.getElementById('dollars-output').innerHTML = `${change[3]}`;
    document.getElementById('quarters-output').innerHTML = `${change[4]}`;
    document.getElementById('dimes-output').innerHTML = `${change[5]}`;
    document.getElementById('nickels-output').innerHTML = `${change[6]}`;
    document.getElementById('pennies-output').innerHTML = `${change[7]}`;
  }

  render() {
    return (
      <div className='mt-3 container'>
        <h1>Change Calculator</h1>
        <hr />
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card inputPanel'>
              <div className='card-header' id='inputHeader'>Enter Information</div>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='inputDue' className='font-weight-bold'>How much is due?</label>
                    <input type='number' name='amountDue' id='inputDue' value={ this.state.amountDue } onChange={ this.handleChange } className='form-control' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='inputReceived' className='font-weight-bold'>How much was received?</label>
                    <input type='number' name='amountReceived' id='inputReceived' value={ this.state.amountReceived } onChange={ this.handleChange } className='form-control' />
                  </div>
                </form>
              </div>
              <div className='card-footer'>
                <button type='button' name='calculate' onClick={ this.handleClick } className='btn btn-primary btn-block'>Calculate</button>
              </div>
            </div>
          </div>
          <div className='card col-sm-8'>
            <div className='card-header outcomeAlerts alert mt-3' id='toggleMe' role='alert'>{this.state.output}</div>
            <div className='row bills card'>
              <div className='row align-item-center card-body'>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='dollars font-weight-bold'>Twenties</p>
                  <p id='20dollars-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='dollars font-weight-bold'>Tens</p>
                  <p id='10dollars-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='dollars font-weight-bold'>Fives</p>
                  <p id='5dollars-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='dollars font-weight-bold'>Ones</p>
                  <p id='dollars-output' className='change'>0</p>
                </div>
              </div>
            </div>

            <div className='row coins card'>
              <div className='row align-item-center card-body'>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='coin font-weight-bold'>Quarters</p>
                  <p id='quarters-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='coin font-weight-bold'>Dimes</p>
                  <p id='dimes-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='coin font-weight-bold'>Nickels</p>
                  <p id='nickels-output' className='change'>0</p>
                </div>
                <div className='col text-center p-2 m-2 border rounded'>
                  <p className='coin font-weight-bold'>Pennies</p>
                  <p id='pennies-output' className='change'>0</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
