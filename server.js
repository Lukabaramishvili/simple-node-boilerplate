const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const reservationsRouter = require('./routes/reservations');

app.use(cors());
app.use(express.json()); // parsin json
app.use(express.urlencoded({ extended: true}));
// serve the homepage from here
app.use(express.static('public'));

// handle api calls from here
app.use('/reservations', reservationsRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
