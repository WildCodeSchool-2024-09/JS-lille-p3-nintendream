import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import UserRepository from "../user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  try {
    const user = await UserRepository.readByMail(req.body.mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);
    if (!verified) {
      res.sendStatus(422);
    } else {
      const { password, ...userWithoutHashedPassword } = user;

      const myPayload: MyPayload = {
        sub: user.id.toString(),
        mail: user.mail,
        first_name: user.first_name,
        name: user.name,
        role: user.role,
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "1h",
        },
      );

      res.json({
        token,
        user: userWithoutHashedPassword,
      });
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

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expériation)
    // En cas de succès, le payload est extrait et décodé
    req.auth = jwt.verify(token, process.env.APP_SECRET as string) as MyPayload;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
const verifyAdmin: RequestHandler = (req, res, next) => {
  if (req.auth.role !== "admin") {
    res.sendStatus(403);
    return;
  }

  next();
};
export default { login, hashedPassword, register, verifyToken, verifyAdmin };
