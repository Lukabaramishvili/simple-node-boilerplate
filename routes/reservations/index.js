const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
const { getAvailability } = require('./utils');

router.get('/', async (req,res) => {

  const reservations = await Reservation.allRaw();

  const available = getAvailability(reservation);

  res.json({
    booked: reservations,
    available,
  });
});

router.post('/book', async (req, res) => {
  const { name, slot } = req.body;
  const reservation = await Reservation.add({
    name,
    slot
  });
  res.json(reservation)
});

module.exports = router;
