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

const add: RequestHandler = async (req, res, next) => {
  try {
    const newEvent = {
      name: req.body.name,
      short_description: req.body.short_description,
      description: req.body.description,
      schedule: req.body.schedule,
      img_src: req.body.img_src,
      zone_id: req.body.zone_id,
    };
    const insertId = await EventRepository.create(newEvent);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const event = {
      id: Number(req.params.id),
      name: req.body.name,
      short_description: req.body.short_description,
      description: req.body.description,
      schedule: req.body.schedule,
      img_src: req.body.img_src,
      zone_id: req.body.zone_id,
    };
    const affectedRows = await EventRepository.update(event);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};
export default { browse, read, add, edit };
