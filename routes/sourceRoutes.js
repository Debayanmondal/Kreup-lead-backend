import express from "express";

import { getAllSources } from "../controller/sourceController.js";
const router = express.Router();
// Route to get all sourceName
router.get("/sources", getAllSources);

export default router;
