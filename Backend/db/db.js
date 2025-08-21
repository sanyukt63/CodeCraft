const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/CodeCraft';

function connectDB() {
  mongoose.connect(dbURI)
    .then(() => {
      console.log('Database connected successfully');
    }).catch(err => 
        console.log(err)
        
    );
}

module.exports = connectDB