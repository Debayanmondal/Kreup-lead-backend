import express from "express";

import { getAllIndustries } from "../controller/industryController.js";
const router = express.Router();
// Route to get all industryName
router.get("/industries", getAllIndustries);

export default router;
