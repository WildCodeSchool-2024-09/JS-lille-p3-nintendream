import type { RequestHandler } from "express";
import attractionRepository from "./attractionRepository";

type newAttraction = {
  id: number;
  name: string;
  waiting_time: string;
  type: string;
  min_height: string;
  zone_id: number;
  schedule: string;
  description: string;
  state: string;
  img_src: string;
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const attractions = await attractionRepository.readAll();

    res.json(attractions);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const attractionId = Number(req.params.id);
    const attraction = await attractionRepository.read(attractionId);

    if (attraction == null) {
      res.sendStatus(404);
    } else {
      res.json(attraction);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const attraction = {
      id: Number(req.params.id),
      name: req.body.name,
      waiting_time: req.body.waiting_time,
      type: req.body.type,
      min_height: req.body.min_height,
      zone_id: req.body.zone_id,
      description: req.body.description,
      image_url: req.body.image_url,
      schedule: req.body.schedule,
      state: req.body.state,
      img_src: req.body.img_src,
    };

    const affectedRows = await attractionRepository.update(attraction);

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
    const newAttraction = {
      name: req.body.name,
      waiting_time: req.body.waiting_time,
      type: req.body.type,
      min_height: req.body.min_height,
      zone_id: req.body.zone_id,
      description: req.body.description,
      image_url: req.body.image_url,
      schedule: req.body.schedule,
      state: req.body.state,
      img_src: req.body.img_src,
    };

    const insertId = await attractionRepository.create(newAttraction);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const attractionId = Number(req.params.id);

    await attractionRepository.delete(attractionId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, destroy };
