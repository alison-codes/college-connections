import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../utils/eventService';
import ConfettiGenerator from "confetti-js";
import Button from 'react-bootstrap/Button';


import nextBlueArrow from '../images/nextarrowblue.svg';
import handupImg from '../images/handup.png';


class EventsPage extends Component {
  state = {

  }
  componentDidMount() {
    this.props.handleUpdateEvents();
  }

  handleReactionButtonClick = e => {
    e.preventDefault();
  }

  handleAddReaction = async e => {
    e.preventDefault();
    await eventService.sendInterests(this.state);
  };



  render() {
    let sampleEvent =
      [{ name: 'sample event1', startTime: 'Monday at 2pm', description: 'sample description 1' }, { name: 'sample event2', startTime: 'Monday at 5pm', description: 'sample description 2' }];
    const eventList = this.props.events.map((e, idx) => (
      <div key={idx} id="event-card" className="card my-5">

        <div className="card-header" id="headingOne">
          <div class="row">
            <div id="event-img" class="col-4">col-8</div>
            <div class="col-8">
              <div class="row">
                <h3>{e.name}</h3>

                <form onSubmit={this.handleReactionButtonClick}>
                  <Button id="interested-btn">
                  <img height="21px" width="21px" src={handupImg} alt="I'm interested" /> 8
                  </Button>
                </form>


              </div>
              <div class="row">
              {e.startTime}
              </div>
              <div class="row">
                perks row
              </div>
              <div class="row">
              <button
                className="more-btn"
                type="button"
                data-toggle="collapse"
                data-target={"#e" + idx}
                aria-expanded="false"
                aria-controls="collapseOne">
                More
          </button>
            </div>
          </div>
        </div>


      </div>
      <div
        id={"e" + idx}
        className="collapse "
        aria-labelledby="headingOne">
        <div className="card-body">
          <h4>{e.description}</h4>
        </div>
      </div>
      </div >
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