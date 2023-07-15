import express from "express";

import { isSeller } from "./middleware/auth.js";
import { createCoupon, deleteCoupon, getCoupon } from "./controller/coupon.js";

const router = express.Router();

router.post("/create-coupon", createCoupon);
router.get("/get-coupon/:id", isSeller, getCoupon);
router.get("/delete-coupon/:id", isSeller, deleteCoupon);

export default router;
