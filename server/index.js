const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors')
const fs = require('fs')
const multer = require('multer');
const db = require('./config/db')
const PORT = process.env.PORT || 8080

const app = express();
// Initializes the database
db();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({ dest: "./uploads/",
  rename: function (fieldname, filename) {
    return filename;
  },
 }));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const routes = require('./routes/routes.js')(app, fs)

app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`)
})