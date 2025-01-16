import type { RequestHandler } from "express";
import RestaurantRepository from "./RestaurantRepository";
import "./AttractionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const restaurant = await RestaurantRepository.readAll();

    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const restaurantId = Number(req.params.id);
    const restaurant = await RestaurantRepository.read(restaurantId);

    if (restaurant == null) {
      res.sendStatus(404);
    } else {
      res.json(restaurant);
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
