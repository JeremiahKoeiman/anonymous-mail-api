const functions = require('firebase-functions');
const app = require('express')();

const protectedRoute = require('./util/protectedRoute')

const {
    signUpWithEmailAndPassword,
    loginWithEmailAndPassword,
    getOwnUserData
} = require('./handlers/users');

const {
    sendMail,
    addSpammer,
    getMessages
} = require('./handlers/gmail')

const {
    addSpamEmailAddress,
    deleteSpamEmailAddress,
    getSpamEmailAddresses
} = require('./handlers/database')

// User
app.post('/signUpWithEmailAndPassword', signUpWithEmailAndPassword);
app.post('/loginWithEmailAndPassword', loginWithEmailAndPassword)
app.get('/getOwnUserData/:username', protectedRoute, getOwnUserData)

// Mail
app.post('/sendMail', protectedRoute, sendMail)
app.get('/addSpammer', protectedRoute, addSpammer)
app.get('/getMessages', protectedRoute, getMessages)

// Database
app.post('/addSpamEmailAddress', protectedRoute, addSpamEmailAddress)
app.delete('/deleteSpamEmailAddress/:emailId', protectedRoute, deleteSpamEmailAddress)
app.get('/getSpamEmailAddresses', protectedRoute, getSpamEmailAddresses)

exports.api = functions.region('europe-west2').https.onRequest(app)
