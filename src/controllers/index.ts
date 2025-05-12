import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../services/db';

const jwtSecret = process.env.JWT_SECRET || 'secret';

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const hashed = await bcrypt.hash(password, 10);

  await pool.query('INSERT INTO users(email, password) VALUES($1, $2)', [email, hashed]);

  res.status(201).json({ message: 'User registered' });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body ?? {};

  if (!email || !password) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
  const user = result.rows[0] ?? {};
  const isValid = await bcrypt.compare(password, user.password ?? '');

  if (!isValid) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
};

export const getUsers = async (_: Request, res: Response) => {
  const result = await pool.query('SELECT id, email FROM users');

  res.json(result.rows);
};
