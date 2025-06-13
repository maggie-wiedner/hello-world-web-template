import express from 'express';
import { UserService } from '../app/lib/services/userService';

const router = express.Router();
const userService = new UserService();

/**
 * GET /api/users/:id
 * Get a user by ID
 */
router.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await userService.getUserById(userId);
    res.json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * POST /api/users
 * Create a new user
 */
router.post('/users', async (req, res) => {
  try {
    const { username, email, firstName, lastName } = req.body;
    
    // Simple validation
    if (!username || !email) {
      return res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Username and email are required'
        },
        timestamp: new Date().toISOString()
      });
    }
    
    const response = await userService.createUser({
      username,
      email,
      firstName,
      lastName
    });
    
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
