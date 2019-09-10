import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import eventService from '../utils/eventService';
import ConfettiGenerator from "confetti-js";
import Event from '../components/Event';
import logo from '../images/matchy_logo.svg';

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
    const eventList = this.props.events.map((e, idx) => (
      <Event key={idx} event={e} idx={idx} handleUpdateEvents={this.props.handleUpdateEvents} user={this.props.user} />
    ));


    return (
      <div className="Events">
        <h5 className="rec-msg">
          <img src={logo} height="20px" alt="Logo" />&nbsp;
          Recommended events for you
        </h5>
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