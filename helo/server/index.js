const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');


require('dotenv').config();
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());



massive(process.env.CONNECTION_STRING).then(
    db => app.set('db', db));




// For REGISTERING
// should pull the username and password off of the body
// The endpoint creates a new user in the database.
// The endpoint should respond with the newly created user.
app.post('/houses', controller.createUser)


// For LOGGING IN
// The endpoint should pull the username and password off of the body.
// The endpoint should pull the user with the matching username and password out of the database.
// The endpoint should respond with the user.
app.post('/houses', controller.addProduct)




// app.get('/houses', controller.getAll)
// app.delete('/houses/:id', controller.deleteProduct)


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log('Started server on port ', port);
});