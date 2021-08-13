import express from 'express';
import { postFood, dailyCaloryNeed } from '../controler/foodCaluclation';

const router = express.Router();

router.post('/food', postFood);
router.get('/dailyCaloryNeed/:id', dailyCaloryNeed);

export default router;
