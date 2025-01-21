import type { RequestHandler } from "express";
import accountRepository from "./accountRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const accounts = await accountRepository.readAll();
    res.json(accounts);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const accountId = Number(req.params.id);
    const account = await accountRepository.read(accountId);

    if (account == null) {
      res.status(404);
    } else {
      res.json(account);
    }
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const newAccount = {
      username: req.body.username,
      password: req.body.password,
      mail: req.body.mail,
      user_id: req.body.user_id,
      hashedPassword: req.body.hashedPassword,
    };
    const insertId = await accountRepository.create(newAccount);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
