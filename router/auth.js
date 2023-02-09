import express from 'express'
import {loginCreate} from '../controllers/auth.js';

const router = express.Router()

router.get('/login', loginCreate);

export default router;