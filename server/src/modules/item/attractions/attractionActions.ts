import type { RequestHandler } from "express";
import attractionRepository from "./attractionRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const attractions = await attractionRepository.readAll();

    res.json(attractions);
  } catch (err) {
    next(err);
  }
};

export default { browse };
