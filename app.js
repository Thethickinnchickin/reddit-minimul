const express = require('express');
const app = express();
const path = __dirname + '/client/src/';;
const cors = require("cors");


//Adding cors to express
app.use(cors());

//Setting view for react native



//routes
const redditRoutes = require('./routes/redditRoutes')

app.use('/reddit', redditRoutes);

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})