// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const formRouter = require('./formdata/route');

// const app = express();
// const port = 3001;

// // Use CORS middleware first
// app.use(cors({ origin: 'http://localhost:3000' }));

// // Use bodyParser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Use your form router
// app.use('/form', formRouter);

// mongoose.connect('mongodb://localhost:27017/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
// // Start the server
// app.listen(port, () => {
//   console.log(`${port} is listening`);
// });





// for basic setup 
// 1 express
// 2 bodyParser
// 3 cors
// 4 mongoose

// app.use is a method to trigger any middleware in express 

const app = require('./api/index');
const mongoose = require('mongoose');
require('dotenv').config();
const port = 3001;




mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('mongodb connected')
}).catch((error) => {
  console.log(error)
})

app.listen(port, () => {
  console.log(`app listen on port${port}`)
})


