const express = require("express");
const router = express.Router();
const eventsCtrl = require("../../controllers/events");

router.get("/", eventsCtrl.index);
router.get('/:id', eventsCtrl.detail);
router.post("/", eventsCtrl.createEvent);
router.delete("/:id", eventsCtrl.deleteEvent);

router.post("/:eventId/reactions", eventsCtrl.createReaction);
router.delete("/:eventId/reactions/:reactionId", eventsCtrl.deleteReaction);

module.exports = router;
