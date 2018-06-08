const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const checkForSession = require('./middleWares/checkForSession')

require('dotenv').config();
const controller = require('./controller')

const app = express();
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkForSession)

massive(process.env.CONNECTION_STRING).then(
    db => app.set('db', db));




// For REGISTERING
// should pull the username and password off of the body
// The endpoint creates a new user in the database.
// The endpoint should respond with the newly created user.
// app.post('/houses', controller.createUser)
// app.post('api/auth/register', (req, res) => {
//     let user_name = req.body.username;
//     let password = req.body.password;
//     const db = req.app.get('db');
//     db.create_user(user_name, password).then(result => {
//         res.send(result);
//     })
// });
app.post('/api/register', controller.register);






// For LOGGING IN
// The endpoint should pull the username and password off of the body.
// The endpoint should pull the user with the matching username and password out of the database.
// The endpoint should respond with the user.
// app.post('/houses', controller.addProduct)
// app.post('api/auth/login', (req, res) => {
//     let user_name = req.body.user;
//     let password = req.body.password;
//     const db = req.app.get('db');
//     db.create_user(user_name, password).then(result => {
//         res.send(result);
//     })
// });

app.post('/api/login', controller.login);


// app.post('/api/post/userid', controller.post);

// app.get('/api/posts/userid')
// app.get('/api/post/userid')
// app.get('/api/post/postid')



// app.get('/houses', controller.getAll)
// app.delete('/houses/:id', controller.deleteProduct)


const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
    console.log('Started server on port ', port);
});