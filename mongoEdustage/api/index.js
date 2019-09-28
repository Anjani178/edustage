const express = require('express')
const router = express.Router()

require('./routes/info')(router)
require('./routes/authentication')(router);

module.exports = router