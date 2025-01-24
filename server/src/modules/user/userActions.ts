import type { RequestHandler } from "express";
import UserRepository from "./userRepository";

type User = {
  username: string;
  password: string;
  first_name: string;
  name: string;
  age: number;
  mail: string;
  user_id: number;
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const accounts = await UserRepository.readAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);
    const user = await UserRepository.read(userId);

    if (user == null) {
      res.status(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser: User = {
      first_name: req.body.firstName,
      name: req.body.name,
      username: req.body.userName,
      mail: req.body.mail,
      age: req.body.age,
      user_id: req.body.user_id,
      password: req.body.password,
    };
    const insertId = await UserRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
