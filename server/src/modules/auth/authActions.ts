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

const hashedPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password);
    req.body.password = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
};

export default { login, hashedPassword };
