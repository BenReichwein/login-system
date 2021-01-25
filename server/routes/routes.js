const user = require('./user');
const post = require('./post')
const image = require('./image')

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send(`<h1>Current working routes:</h1>`);
        res.end();
    })
    // Routes
    user(app);
    post(app);
    image(app);
}

module.exports = appRouter;