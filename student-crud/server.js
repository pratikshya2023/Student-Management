const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/student.routes');
const db = require('./models');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRoutes);

// Sync database
db.sequelize.sync()
  .then(() => {
    console.log('Synced database.');
  })
  .catch((err) => {
    console.log('Failed to sync database: ' + err.message);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
