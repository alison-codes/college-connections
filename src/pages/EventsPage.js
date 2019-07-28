import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ConfettiGenerator from "confetti-js";

class EventsPage extends React.Component {
  render() {
    let sampleEvent =
      [{ name: 'sample event1', startTime: 'Monday at 2pm', description: 'sample description 1' }, { name: 'sample event2', startTime: 'Monday at 5pm', description: 'sample description 2' }];
    const eventList = sampleEvent.map((e, idx) => (
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