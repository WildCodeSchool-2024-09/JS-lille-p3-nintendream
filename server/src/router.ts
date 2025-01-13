import express from "express";
import AttractionsActions from "./modules/item/AttractionsActions";
import RestaurantAction from "./modules/item/RestaurantAction";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
router.get("/api/attraction/:id", AttractionsActions.read);
router.get("/api/restaurant/:id", RestaurantAction.read);
// Define item-related routes

/* ************************************************************************* */

export default router;
