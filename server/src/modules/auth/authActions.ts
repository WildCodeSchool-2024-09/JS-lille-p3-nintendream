import argon2 from "argon2";
import type { RequestHandler } from "express";
import joi from "joi";
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

const userSchema = joi.object({
  first_name: joi.string().max(255).required().messages({
    "string.empty": "Le prénom est requis",
    "string.max": "Le prénom ne peut pas dépasser 255 caractères",
  }),
  name: joi.string().max(255).required().messages({
    "string.empty": "Le nom est requis",
    "string.max": "Le nom ne peut pas dépasser 255 caractères",
  }),
  age: joi.number().max(120).required().messages({
    "number.base": "L'âge doit être un nombre",
    "number.max": "L'âge ne peut pas dépasser 120 ans",
    "any.required": "L'âge est requis",
  }),
  mail: joi.string().email().max(255).required().messages({
    "string.email": "L'email doit être valide",
    "string.empty": "L'email est requis",
    "string.max": "L'email ne peut pas dépasser 255 caractères",
    "any.required": "L'email est requis",
  }),
  username: joi.string().max(255).required().messages({
    "string.empty": "Le nom d'utilisateur est requis",
    "string.max": "Le nom d'utilisateur ne peut pas dépasser 255 caractères",
  }),
  password: joi.string().max(255).required().messages({
    "string.empty": "Le mot de passe est requis",
    "string.max": "Le mot de passe ne peut pas dépasser 255 caractères",
  }),
});
const validate: RequestHandler = (req, res, next) => {
  const { error } = userSchema.validate(req.body, { abortEarly: false });

  if (error == null) {
    next();
  } else {
    res.status(400).json({ validationErrors: error.details });
  }
};

export default { login, hashedPassword, register, validate };
