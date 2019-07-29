import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import handupImg from '../images/handup.png';
import eventService from '../utils/eventService';



class Event extends Component {
  state = {}

  handleAddReaction = async (e) => {
    e.preventDefault();
    await eventService.addReaction(this.props.event._id, this.props.user._id);
    this.props.handleUpdateEvents();
  };

  render() {
    return (
      <div id="event-card" className="card my-5">

        <div className="card-header" id="headingOne">
          <div className="row">
            <div id={"event" + this.props.idx} class="col-4">
              <p> {this.props.event.startTime.toString().slice(5, 9)}<br /> {this.props.event.startTime.toString().slice(10, 13)}</p>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-8">
                  <h3 className="event-name">{this.props.event.name}</h3>
                </div>
                <div className="col-4">
                  <form>
                    <input type="hidden" />
                    <Button id="interested-btn" onClick={this.handleAddReaction}>
                      <img height="21px" width="21px" src={handupImg} alt="I'm interested" /> {this.props.event.reactions.length}
                    </Button>
                  </form>
                </div>

              </div>
              <div className="row event-row">
                {this.props.event.startTime}
              </div>
              <div className="row event-row">
                perks row
              </div>
              <div className="row">
                <button
                  className="more-btn"
                  type="button"
                  data-toggle="collapse"
                  data-target={"#e" + this.props.idx}
                  aria-expanded="false"
                  aria-controls="collapseOne">
                  More
          </button>
              </div>
            </div>
          </div>


        </div>
        <div
          id={"e" + this.props.idx}
          className="collapse "
          aria-labelledby="headingOne">
          <div className="card-body">
            <h4>{this.props.event.description}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Event;