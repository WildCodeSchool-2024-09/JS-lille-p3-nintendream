import express from "express";
import EventActions from "./modules/Events/EventActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/api/events", EventActions.browse);
router.get("/api/events/:id", EventActions.read);
// Define item-related routes

/* ************************************************************************* */

export default router;
