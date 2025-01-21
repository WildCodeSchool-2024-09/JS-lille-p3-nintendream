import type { RequestHandler } from "express";
import UserRepository from "./userRepository";

type User = {
  id: number;
  role: string;
  username: string;
  password: string;
  first_name: string;
  name: string;
  age: number;
  mail: string;
  user_id: number;
  hashedPassword: string;
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
      id: req.body.id,
      role: "user",
      first_name: req.body.first_name,
      name: req.body.name,
      username: req.body.username,
      mail: req.body.mail,
      age: req.body.age,
      user_id: req.body.user_id,
      password: req.body.password,
      hashedPassword: "",
    };
    const insertId = await UserRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
