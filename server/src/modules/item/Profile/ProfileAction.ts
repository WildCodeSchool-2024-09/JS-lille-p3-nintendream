import type { RequestHandler } from "express";
import "./AttractionRepository";
import ProfileRepository from "./ProfileRepository";
const browse: RequestHandler = async (req, res, next) => {
  try {
    const profile = await ProfileRepository.readAll();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};
const read: RequestHandler = async (req, res, next) => {
  try {
    const profileId = Number(req.params.id);
    const profile = await ProfileRepository.read(profileId);
    if (profile == null) {
      res.sendStatus(404);
    } else {
      res.json(profile);
    }
  } catch (err) {
    next(err);
  }
};
export default { browse, read };
