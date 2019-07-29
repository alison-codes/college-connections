import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventService from '../utils/eventService';
import ConfettiGenerator from "confetti-js";
import Button from 'react-bootstrap/Button';
import Event from '../components/Event';


import nextBlueArrow from '../images/nextarrowblue.svg';
import handupImg from '../images/handup.png';
import recicon from '../images/recicon.png';


class EventsPage extends Component {
  state = {

  };

  async componentDidMount() {
    this.props.handleUpdateEvents();

      };

  handleReactionButtonClick = async e => {
    e.preventDefault();
    
  };

  

  handleRemoveReaction = async () => {
    await eventService.removeReaction(this.state);
  };



  render() {
    let sampleEvent =
      [{ name: 'sample event1', startTime: 'Monday at 2pm', description: 'sample description 1' }, { name: 'sample event2', startTime: 'Monday at 5pm', description: 'sample description 2' }];
    const eventList = this.props.events.map((e, idx) => (
      <Event key={idx} event={e} idx={idx} handleUpdateEvents={this.props.handleUpdateEvents} user={this.props.user} />
    ));

    
    return (
      <div className="Events">
        <h5 className="rec-msg">Recommended events for you</h5>
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