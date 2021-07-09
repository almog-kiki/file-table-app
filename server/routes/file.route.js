const express = require('express');
const router = express.Router();
const table_controller = require('../controllers/file.controller');
const constants = require('../lib/constants')
const cors          = require('cors');

router.all('*', cors(constants.CORS_OPTIONS));
router.get('/names', table_controller.getFilesList);
router.get('/', table_controller.getFileContent);


module.exports = router;
