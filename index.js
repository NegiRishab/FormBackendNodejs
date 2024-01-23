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

const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
require('dotenv').config();
const formroute=require('./formdata/route')
const app=express();
const port=3001;

// when deploy  on vercel 
// const corsOptions = {
//   origin: 'https://react-form-ruddy-one.vercel.app',
//   credentials: true,
// }


// const corsConfig = {
  /* parse encoded data  like & ? */
//   origin: '',
//   credentials: true,
//   methods: ['GET', 'POST', 'PUT', 'DELETE']
// }
// app.use(cors(corsConfig))
// app.options("", cors(corsConfig))
// this for local use 
// app.use(cors({ origin: 'https://react-form-ruddy-one.vercel.app'}));
app.use(bodyParser.json()); /* parse json data */
app.use(bodyParser.urlencoded({extended:true})); 
app.use(cors());
app.get('/', (req, res, next) => res.status(200).json({ root: 'ok' }));
app.use('/form',formroute);
app.use((err, req, res, next) => {
  // Log the error or perform any custom handling
  console.error(err.stack);

  // Set a custom status code for the error response
  res.status(err.status || 500);

  // Send a JSON response with the error message
  res.json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});
console.log("process",process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log('mongodb connected')
}).catch((error)=>{
  console.log(error)
})

app.listen(port,()=>{
  console.log(`app listen on port${port}`)
})