import express from 'express';
import { pool } from '../db/index.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Create new AC listing
router.post('/', auth, async (req, res) => {
  try {
<<<<<<< HEAD
    const { 
      title, 
      description, 
      brand, 
      manufacturing_year, 
      ac_type, 
      dimensions, 
      no_of_ac, 
      price, 
      photos 
=======
    const {
      title,
      description,
      brand,
      manufacturing_year,
      ac_type,
      dimensions,
      no_of_ac,
      price,
      photos
>>>>>>> 92eb4d58c4623ffbe2a4b65ada7ebab150a08de2
    } = req.body;

    // Validate required fields
    if (!title || !brand || !manufacturing_year || !ac_type || !no_of_ac || !price) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await pool.query(
      `INSERT INTO ac_listings (
        user_id,
        title,
        description,
        brand,
        manufacturing_year,
        ac_type,
        dimensions,
        no_of_ac,
        price,
<<<<<<< HEAD
        photos
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
=======
        photos,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
>>>>>>> 92eb4d58c4623ffbe2a4b65ada7ebab150a08de2
      RETURNING *`,
      [
        req.user.id,
        title,
        description,
        brand,
        manufacturing_year,
        ac_type,
        dimensions,
        no_of_ac,
        price,
<<<<<<< HEAD
        photos
=======
        photos || []
>>>>>>> 92eb4d58c4623ffbe2a4b65ada7ebab150a08de2
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
<<<<<<< HEAD
    console.error(err);
=======
    console.error('Error creating AC listing:', err);
>>>>>>> 92eb4d58c4623ffbe2a4b65ada7ebab150a08de2
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user's AC listings
router.get('/user/:userId', auth, async (req, res) => {
  try {
    const { userId } = req.params;

    // Ensure user can only access their own listings
    if (req.user.id !== parseInt(userId)) {
      return res.status(403).json({ message: 'Not authorized to access these listings' });
    }

    const result = await pool.query(
      `SELECT * FROM ac_listings WHERE user_id = $1 ORDER BY created_at DESC`,
      [userId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all AC listings
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM ac_listings ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single AC listing
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM ac_listings WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 