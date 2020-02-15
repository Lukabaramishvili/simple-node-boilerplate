const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

router.post('/book', async (req,res) => {
  const newRes = await Reservation.create({
    name: DataTypes.STRING,
    slot: DataTypes.DATE
  })
});





module.exports = router;
