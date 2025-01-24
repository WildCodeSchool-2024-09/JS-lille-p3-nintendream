import type { RequestHandler } from "express";
import "./AttractionRepository";
import AttractionRepository from "./AttractionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const attractions = await AttractionRepository.readAll();

    // Respond with the items in JSON format
    res.json(attractions);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const attractionId = Number(req.params.id);
    const attraction = await AttractionRepository.read(attractionId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (attraction == null) {
      res.sendStatus(404);
    } else {
      res.json(attraction);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read };
