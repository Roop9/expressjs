const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')

// Initiliaze our middleware
//app.use(logger);

// Middleware BODY Parses
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors())

// Member API Routes
app.use('/api/users',require('./routes/api/users/'));

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`Server Started on port ${PORT}`));


