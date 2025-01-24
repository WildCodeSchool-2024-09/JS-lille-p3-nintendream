import type { RequestHandler } from "express";
import EventRepository from "./EventRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const events = await EventRepository.readAll();

    // Respond with the items in JSON format
    res.json(events);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const eventId = Number(req.params.id);
    const event = await EventRepository.read(eventId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (event == null) {
      res.sendStatus(404);
    } else {
      res.json(event);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { browse, read };
