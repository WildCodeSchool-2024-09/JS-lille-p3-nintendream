import type { RequestHandler } from "express";
import "./AttractionRepository";
import ProfileRepository from "./ProfileRepository";
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const profile = await ProfileRepository.readAll();

    // Respond with the items in JSON format
    res.json(profile);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const profileId = Number(req.params.id);
    const profile = await ProfileRepository.read(profileId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (profile == null) {
      res.sendStatus(404);
    } else {
      res.json(profile);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { browse, read };
