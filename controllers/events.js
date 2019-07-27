const Event = require('../models/event');
const User = require('../models/user');

function index(req, res) {
  Event.find({})
    .populate('reactions.user')
    .then(events => res.status(200).json(events))
    .catch(err => res.status(400).json(err));
}

function detail(req, res) {
  Event.findById(req.params.id)
    .populate('reactions.user')
    .then(event => res.status(200).json(event))
    .catch(err => res.status(400).json(err));
}

async function createEvent(req, res) {
  const event = new Event(req.body);
  try {
    await event.save();
    res.json(event);
  } catch(err) {
    res.status(400).json(err);
  }
}

function deleteEvent(req, res) {
  Event.findOneAndDelete({ _id: req.params.id })
    .then(event => res.json(event))
    .catch(err => res.status(400).json(err));
}

function createReaction(req, res) {
  Event.findById(req.params.eventId)
    .then(async event => {
      event.reactions.push(req.body);
      await event.save();
      return res.json(event);
    })
    .catch(err => res.status(400).json(err));
}

function deleteReaction(req, res) {
  Event.findById(req.params.eventId)
    .then(async event => {
      event.reactions.id(req.params.reactionId).remove();
      await event.save();
      return res.json(event);
    })
}

module.exports = {
  index,
  detail,
  createEvent,
  deleteEvent,
  createReaction,
  deleteReaction
};