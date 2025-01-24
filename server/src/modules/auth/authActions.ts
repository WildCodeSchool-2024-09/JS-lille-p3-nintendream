import argon2 from "argon2";
import type { RequestHandler } from "express";
import UserRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserRepository.readByMailWithPassword(req.body.mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);
    if (!verified) {
      res.sendStatus(422);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

const register: RequestHandler = async (req, res, next) => {
  try {
    const newUsers = {
      name: req.body.name,
      first_name: req.body.firstName,
      age: req.body.age,
      username: req.body.user,
      mail: req.body.mail,
      password: req.body.password,
    };

    const createUser = await UserRepository.create(newUsers);
    res.status(201).json({ createUser });
  } catch (err) {
    next(err);
  }
};

const hashedPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;
    const { confirmPassword } = req.body;
    const hashedPassword =
      (await argon2.hash(password)) || argon2.hash(confirmPassword);
    req.body.password = hashedPassword;
    req.body.confirmPassword = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
};

export default { login, hashedPassword, register };
