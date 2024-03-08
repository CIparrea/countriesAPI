import { Router } from "express";
import countryRoutes from "./CountryRoutes.js";

const router = Router();

router.get("/", (req, res) => res.send("This the api root"));

router.use("/countries", countryRoutes);

export default router;
