import React, { Component } from 'react';
import Moment from 'react-moment';

class ListAppointment extends Component {
  render() {
    return (
      <div className='appointment-list item-list mb-3'>
        {this.props.data.map((item, index) => (
          <div className='pet-item col media py-3' key={index}>
            <div className='mr-3'>
              <button
                onClick={() => this.props.deleteHandler(item)}
                className='pet-delete btn btn-sm btn-danger'
              >
                Delete
              </button>
            </div>
            <div className='pet-info media-body'>
              <div className='pet-head d-flex'>
                <span className='pet-name'>{item.petName}</span>
                <span className='apt-date ml-auto'>
                  <Moment
                    date={item.aptDate}
                    parse='yyyy-MM-dd hh:mm'
                    format='MMM-D h:mma'
                  />
                </span>
              </div>
              <div className='owner-name'>
                <span className='label-item'>Owner:</span>
                <span>{item.ownerName}</span>
              </div>
              <div className='apt-notes'>{item.aptNotes}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointment;
