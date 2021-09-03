const mongoose = require('mongoose');
const { database } = require('./keys');

mongoose.connect(database.URI)
  .then(() => console.log('DB is connected'))
  .catch((err) => console.error(err));