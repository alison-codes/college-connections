import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import handupImg from '../images/handup.png';
import eventService from '../utils/eventService';



class Event extends Component {
  state = {  }

  handleAddReaction = async (e) => {
    e.preventDefault();
    await eventService.addReaction(this.props.event._id, this.props.user._id);
    this.props.handleUpdateEvents();
  };

  render() { 
    return (  
    <div id="event-card" className="card my-5">

        <div className="card-header" id="headingOne">
          <div class="row">
            <div id="event-img" class="col-4">col-8</div>
            <div class="col-8">
              <div class="row">
                <h3>{this.props.event.name}</h3>



                <form>
                  <input type="hidden" />
                  <Button id="interested-btn" onClick={this.handleAddReaction}>
                  <img height="21px" width="21px" src={handupImg} alt="I'm interested" /> {this.props.event.reactions.length}
                  </Button>
                </form>


              </div>
              <div class="row">
              {this.props.event.startTime}
              </div>
              <div class="row">
                perks row
              </div>
              <div class="row">
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