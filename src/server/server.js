const bodyParser = require('body-parser');
const config = require('../config.js'); 
const events = require('events'); 
const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express'); 
const mongoose = require('mongoose'); 
const passport = require('../user/passport/index.js');
const session = require('express-session');
const schema = require('../schema.js');

const app = express();
const mongoStore = require('connect-mongo')(session);

class Loader extends events.EventEmitter {
    constructor() {
        super();
    }

    init() {
        const self = this;
        mongoose.set('useCreateIndex', true);
        mongoose.connect(config.DB_URL + '/' + config.DB_NAME, { useNewUrlParser: true });
        mongoose.Promise = Promise;
        app.use(bodyParser.json());
        app.use(
            session({
                secret: 'keyboard cat',
                saveUninitialized: true,
                resave: true, 
                store: new mongoStore({ mongooseConnection: mongoose.connection})
            })
        );
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(
            '/' + config.GQL_URL_DIR,
            graphqlExpress((req, res) => {
                console.log('user: ', req.sessionID);
                return { schema, context: { req }};
            })
        );
        console.log(`GQL_URL_DIR: ${config.GQL_URL_DIR}`);
        app.use('/graphiql', graphiqlExpress({ endpointURL: '/' + config.GQL_URL_DIR } ));
        app.listen(config.APP_PORT, () => {
            self.emit('server.loaded');
            console.log(`Server listening at port ${config.APP_PORT}`);
        });
        
    }
}

module.exports = new Loader();