import type { RequestHandler } from "express";
import hotelRepository from "./hotelRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const hotels = await hotelRepository.readAll();

    res.json(hotels);
  } catch (err) {
    next(err);
  }
};

const readRoomsByHotelId: RequestHandler = async (req, res, next) => {
  try {
    const hotelId = Number(req.params.id);
    const hotel = await hotelRepository.getRoomsByHotelId(hotelId);

    if (hotel == null) {
      res.sendStatus(404);
    } else {
      res.json(hotel);
    }
  } catch (err) {
    next(err);
  }
};

const readHotelInfos: RequestHandler = async (req, res, next) => {
  try {
    const hotelId = Number(req.params.id);
    const hotel = await hotelRepository.getHotelInfos(hotelId);

    if (hotel == null) {
      res.sendStatus(404);
    } else {
      res.json(hotel);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const hotel = {
      id: req.params.id,
      name: req.body.name,
      distance: req.body.distance,
      hotel_price: req.body.hotel_price,
      description: req.body.description,
      secondary_description: req.body.secondary_description,
      tertiary_description: req.body.tertiary_description,
    };

    const room = {
      id: req.body.roomId,
      img: req.body.img,
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      link_title: req.body.link_title,
    };

    const affectedRows = await hotelRepository.update(hotel, room);

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
    const newHotel = {
      name: req.body.name,
      img: req.body.img,
      distance: req.body.distance,
      hotel_price: req.body.hotel_price,
      description: req.body.description,
      secondary_description: req.body.secondary_description,
      tertiary_description: req.body.tertiary_description,
    };

    const newRooms = [
      {
        id: req.body.id,
        img: req.body.img,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        link_title: req.body.link_title,
      },
    ];

    const insertId = await hotelRepository.create(newHotel, newRooms);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const hotelId = Number(req.params.id);

    await hotelRepository.deleteByHotelId(hotelId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  readRoomsByHotelId,
  readHotelInfos,
  edit,
  add,
  destroy,
};
