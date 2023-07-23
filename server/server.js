const mongoose = require('mongoose');
const express = require('express');
const app = express();
// const db = mongoose.connect;
const PromptController = require('./controllers/promptController')
// const envVariables = process.env;
// const {mongoURI} = envVariables;
const PORT = 3000;

mongoose.connect(
    'mongodb+srv://zhubrisa:A6hqxAKiJ38Ha34b@blind75prompts.qcl2exy.mongodb.net/?retryWrites=true&w=majority',  
    { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }
)
.then(() => {
    console.log("connected");
})
.catch(err => {
    console.log(err);
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// add routes
const promptRouter = express.Router();
app.use('/', promptRouter);

// gets a prompt from the database
promptRouter.get('/getPrompt', PromptController.getPrompt, (req, res) => {
// app.get('/getPrompt', PromptController.getPrompt, (req, res) => {
    // gives me an error if i try to send a status
    return res.json(res.locals.prompt);
  });

// creates and returns a new prompt
// promptRouter.post('/', PromptController.createPrompt, (req, res) => {
//     return res.send(res.locals.newPrompt);
// })

promptRouter.post('/createPrompt', PromptController.createPrompt, (req, res) => {
// app.post('/createPrompt', PromptController.createPrompt, (req, res) => {
    return res.json(res.locals.newPrompt);
})

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// module.exports = db;
module.exports = app;