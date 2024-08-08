import express from "express";

import { getLeadOwners } from "../controller/userController.js";
const router = express.Router();
// Route to get all userName where role is Lead Owner
router.get("/lead-owners", getLeadOwners);

export default router;
