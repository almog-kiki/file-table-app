

const path = require('path');
const CORS_OPTIONS = { origin: 'http://localhost:4200' };
const FILES_DIRECTORY_NAME = 'files';
const FILES_PATH = path.join( path.dirname(require.main.filename), FILES_DIRECTORY_NAME);

module.exports = Constants = {
    FILES_PATH: FILES_PATH,
    CORS_OPTIONS: CORS_OPTIONS

}