import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../utils/eventService';

class EventsPage extends Component {

  componentDidMount() {
    this.props.handleUpdateEvents();
  }  

  render() {

  const events = this.props.events.map((event, idx) => (
    <div key={idx}>
      {event.name} starts at {event.startTime}
    </div>
  ));


    return (
      <div className="DashboardPage-component">

        List of Events
      {events}
  </div>
    );
  };

}

export default EventsPage;