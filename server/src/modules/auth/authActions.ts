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

    const verified = await argon2.verify(
      user.hashedPassword,
      req.body.password,
    );
    if (verified) {
      const { hashedPassword, ...userWithoutPassword } = user;

      res.json(userWithoutPassword);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const hashedPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await argon2.hash(password);
    req.body.hashedPassword = hashedPassword;
    req.body.password = undefined;
    next();
  } catch (err) {
    next(err);
  }
};

export default { login, hashedPassword };
