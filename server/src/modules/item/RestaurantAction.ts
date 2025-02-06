import type { RequestHandler } from "express";
import RestaurantRepository from "./RestaurantRepository";

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
const edit: RequestHandler = async (req, res, next) => {
  try {
    const restaurant = {
      id: Number(req.params.id),
      name: req.body.name,
      img: req.body.img,
      intro: req.body.intro,
      text: req.body.text,
      adult_price: req.body.adult_price,
      kids_price: req.body.kids_price,
    };

    const affectedRows = await RestaurantRepository.update(restaurant);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newRestaurant = {
      name: req.body.name,
      img: req.body.img,
      intro: req.body.intro,
      text: req.body.text,
      adult_price: req.body.adult_price,
      kids_price: req.body.kids_price,
    };

    const insertId = await RestaurantRepository.create(newRestaurant);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const restaurantId = Number(req.params.id);

    await RestaurantRepository.delete(restaurantId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const validate: RequestHandler = (req, res, next) => {
  type ValidationError = {
    field: string;
    message: string;
  };

  const errors: ValidationError[] = [];

  const { name } = req.body;
  if (name == null) {
    errors.push({ field: "name", message: "The field is required" });
  }
  if (errors.length === 0) {
    next();
  } else {
    res.status(400).json({ validationErrors: errors });
  }
};

export default { browse, read, edit, add, destroy, validate };
