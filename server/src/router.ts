import express from "express";
import EventActions from "./modules/Events/EventActions";
import hotelActions from "./modules/hotels/hotelActions";
import RestaurantAction from "./modules/item/RestaurantAction";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/api/restaurant", RestaurantAction.browse);

router.get("/api/restaurant/:id", RestaurantAction.read);
router.put("/api/restaurant/:id", RestaurantAction.edit);
router.post("/api/restaurant", RestaurantAction.add);
router.delete("/api/restaurant/:id", RestaurantAction.destroy);

router.get("/api/events", EventActions.browse);
router.get("/api/events/:id", EventActions.read);
router.post("/api/events", EventActions.add);

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

router.get("/api/hotels", hotelActions.browse);
router.get("/api/hotel/:id", hotelActions.readHotelInfos);
router.get("/api/hotel/:id/rooms", hotelActions.readRoomsByHotelId);
router.put("/api/hotel/:id", hotelActions.edit);
router.post("/api/hotels", hotelActions.add);
router.delete("/api/hotel/:id", hotelActions.destroy);

import UserActions from "./modules/user/userActions";

router.get("/api/users", UserActions.browse);
router.get("/api/user/:id", UserActions.read);
router.post("/api/users", authActions.hashedPassword, UserActions.add);

import authActions from "./modules/auth/authActions";

router.post("/api/login", authActions.login);
router.post("/api/register", authActions.hashedPassword, authActions.register);

export default router;
