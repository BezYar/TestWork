import { Router } from 'express';
import { register, login, getUsers } from '../controllers';
import auth from '../middleware/auth';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', auth, getUsers);

export default router;