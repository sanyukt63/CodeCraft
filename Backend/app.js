const express = require('express');
const app = express();
const cors = require('cors')
const connectToDB = require('./db/db')
const userRoutes = require('./routes/userRouter')

connectToDB();


app.use(cors({
  origin: "http://127.0.0.1:5500",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

//app.options('*',cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use(userRoutes)


module.exports = app;