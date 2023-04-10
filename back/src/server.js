const express = require('express');
const router = require('./routes')
const PORT = 3001;
const morgan = require('morgan');
const cors = require('cors')


const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(cors())

server.use('/rickandmorty', router);
server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});



