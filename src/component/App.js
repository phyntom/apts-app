import React, { Component } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointment from './SearchAppointment';
import ListAppointment from './ListAppointment';
import { without } from 'lodash';

class App extends Component {
  state = {
    appointments: [],
    formDisplay: false
  };

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result;
        this.setState({ appointments: apts });
      });
  }

  onDelete = item => {
    let remainingApts = without(this.state.appointments, item);
    this.setState({ appointments: remainingApts });
  };

  // onDelete = item => {
  //   console.log(this.state.appointments.length);
  //   let remainingApts = this.state.appointments.filter(
  //     value => item.petName !== value.petName
  //   );
  //   this.setState({ appointments: remainingApts });
  //   console.log(remainingApts.length);
  // };

  toggleForm = () => {
    this.setState({ formDisplay: !this.state.formDisplay });
  };

  render() {
    return (
      <main className='page bg-white' id='petratings'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 bg-white'>
              <div className='container'>
                <AddAppointments
                  onToggleForm={this.toggleForm}
                  formDisplay={this.state.formDisplay}
                />
                <SearchAppointment />
                <ListAppointment
                  data={this.state.appointments}
                  deleteHandler={this.onDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
