const express = require('express')
const router = express.Router()

require('./routes/info')(router)

module.exports = router