import { Router } from "express";
//import { healthCheck } from "./controllers/healthcheck.service";
import { getRandomQuote } from "./services/quotes.service";
import { healthCheck } from "./services/healthcheck.service";

const router = Router();

router.get('/api/healthcheck', healthCheck)
router.get('/api/quotes', getRandomQuote)

export default router;
