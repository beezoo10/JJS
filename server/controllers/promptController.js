const Prompt = require('../PromptModel');
// const blind75 = require('../blind75')

const PromptController = {
  // Create a new prompt in the Database
  // Their information will be sent in the request body

//   const promptSchema = new Schema({
//     title: {type: String, required: true},
//     hyperlink: {type: String, required: true},
//     level: {type: String},
//     done: {type: String, default: 'Not Completed'},
//     recentDate: {type: String, required: true},
//   });

    async getPrompt(req, res, next) {
        try {
            // entire prompt database
            const prompts = await Prompt.find();
            // console.log(prompts)
            const {title, hyperlink} = prompts[Math.floor(Math.random()*prompts.length)];
            res.locals.prompt = {title, hyperlink};
            return next();
        } catch(err) {
            res.sendStatus(400);
        }
    },

    async createPrompt(req, res, next) {
        console.log('entered createPrompt')
        for (const {title, hyperlink} of req.body){
            console.log(title + hyperlink);
            try {
                const newPrompt = await Prompt.create({
                    title: title, 
                    hyperlink: hyperlink,
                });
                res.locals.newPrompt = newPrompt;
                // return next();
            } catch(err){
                res.sendStatus(400);
                return next();
            }
        }
    },
};

module.exports = PromptController;
