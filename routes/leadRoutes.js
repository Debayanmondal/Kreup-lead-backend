import express from "express";
import { createLead } from "../controller/leadController.js";
const router = express.Router();
// Route to create a new lead
router.post("/", createLead);

export default router;
