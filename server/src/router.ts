import express from "express";
import RestaurantAction from "./modules/item/RestaurantAction";

import EventActions from "./modules/Events/EventActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/api/restaurant/:id", RestaurantAction.read);

router.get("/api/events", EventActions.browse);
router.get("/api/events/:id", EventActions.read);
router.get("/api/restaurant/:id", RestaurantAction.read);
router.get("api/profile/:id", ProfileAction.read);

// Define item-related routes

/* ************************************************************************* */

import ProfileAction from "./modules/item/Profile/ProfileAction";
import attractionActions from "./modules/item/attractions/attractionActions";

router.get("/api/attractions", attractionActions.browse);
router.get("/api/attractions/:id", attractionActions.read);
router.put("/api/attractions/:id", attractionActions.edit);
router.post("/api/attractions", attractionActions.add);
router.delete("/api/attractions/:id", attractionActions.destroy);

export default router;
