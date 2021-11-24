import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
      <h1>Change Calculator</h1>
      <hr/>
      <div className='row'>
        <div className='col-sm-4'>
          <div className='card inputPanel'>
            <div className='card-header'>Enter Information</div>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label htmlFor="inputDue">How much is due?</label>
                  <input type="text" className='form-control'/>
                </div>
                <div className='form-group'>
                  <label htmlFor="inputReceived">How much was received?</label>
                  <input type="text" className='form-control'/>
                </div>
              </form>
            </div>
            <div className='card-footer'>
              <button type="button" className="btn btn-primary">Calculate</button>
            </div>
          </div>
        </div>
        <div className='col-sm-8'>
          <div className='outcomeAlerts'>
            <div className="alert alert-success" role="alert">The total change due is [change amount]</div>
            <div className="alert alert-danger" role="alert">[amount] of additional money is owed.</div>
          </div>
          
        </div>
      </div>

    </div>
    );
  }
}

export default App;
