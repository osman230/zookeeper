const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);




// db.query(`SELECT * FROM candidates`, (err, rows) => {
//   console.log(rows);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// start server after db conncection

db.connect(err => {
  if (err) throw err;
  console.log('database connected');
  app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
  });
});