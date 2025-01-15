import type { RequestHandler } from "express";
import RestaurantRepository from "./RestaurantRepository";
import "./AttractionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const restaurant = await RestaurantRepository.readAll();

    // Respond with the items in JSON format
    res.json(restaurant);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const restaurantId = Number(req.params.id);
    const restaurant = await RestaurantRepository.read(restaurantId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (restaurant == null) {
      res.sendStatus(404);
    } else {
      res.json(restaurant);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read };
