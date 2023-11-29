import express from 'express';
import { createBooking, getAllBookings, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const bookingRoute = express.Router();

// Create a new review for a tour
bookingRoute.post('/', createBooking);

bookingRoute.get('/:id',verifyAdmin, getBooking);

bookingRoute.get('/',verifyAdmin, getAllBookings);

export default bookingRoute
