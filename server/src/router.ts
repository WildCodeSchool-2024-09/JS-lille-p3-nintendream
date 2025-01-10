import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes

/* ************************************************************************* */

import attractionActions from "../modules/category/attractionActions";

router.get("/api/attractions", attractionActions.browse);

export default router;
