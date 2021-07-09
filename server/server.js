const express       = require('express');
const bodyParser    = require('body-parser');
const dotenv        = require("dotenv");
const cluster       = require('cluster');
const numCPUs       = require('os').cpus().length;
const file        = require('./routes/file.route');

const app = express();
dotenv.config();

app.use('/api/file', file);

const startServer = async(port) =>{
    app.listen(port);
    console.log("Server listening at http://%s:%s", "localhost", port);
}

function createCluserts(){
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
          cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        startServer(process.env.PORT || 8002)
    }
    console.log(`Worker ${process.pid} started`);
}

if (process.env.NODE_ENV !== 'test') {
    createCluserts();
} else {
    startServer(process.env.TEST_PORT || 7999)
}

process.on('uncaughtException', function(error) {
    console.log('Caught exception: ' + error);
    console.log('error.stack: ' + error.stack);
});

module.exports = app;
