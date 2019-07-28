import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../utils/eventService';
import ConfettiGenerator from "confetti-js";


class EventsPage extends Component {
  componentDidMount() {
    this.props.handleUpdateEvents();
  }  

  render() {
    let sampleEvent =
      [{ name: 'sample event1', startTime: 'Monday at 2pm', description: 'sample description 1' }, { name: 'sample event2', startTime: 'Monday at 5pm', description: 'sample description 2' }];
    const eventList = this.props.events.map((e, idx) => (
      <div className="card card-signin my-5">
        <div className="card-header" id="headingOne">
          <h3>name: {e.name}</h3>
          <button
            className="accent-text btn-link"
            type="button"
            data-toggle="collapse"
            data-target={"#e" + idx}
            aria-expanded="true"
            aria-controls="collapseOne">
            + push me to toggle event details
          </button>
        </div>
        <div
          id={"e" + idx}
          className="collapse show"
          aria-labelledby="headingOne">
          <div className="card-body">
            <h4>{e.description}</h4>
          </div>
        </div>
      </div>
    ));

  const events = this.props.events.map((event, idx) => (
    <div key={idx}>
      {event.name} starts at {event.startTime}
    </div>
  ));
    return (
      <div className="Events">
        <div className="container">
          <div >
            {eventList}
            <Confetti />
          </div>
        </div>
      </div>
    );
  };
}

const Confetti = () => {
  React.useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(confetti.clear, 10000);
    return () => confetti.clear();
  }, [])
  return (
    <div className="confetti">
      <canvas id="my-canvas"></canvas>
    </div>
  );
};

export default EventsPage;