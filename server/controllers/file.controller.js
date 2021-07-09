const requestUtils  = require('../lib/requestUtils');
const utils         = require('../lib/utils');

exports.getFilesList = async function (req, res){
    try{
        let filesList = await utils.getFileNames()
        requestUtils.retrunSuccessResponse(res, filesList)
    } catch (error){
        console.log(error.stack)
        requestUtils.retrunFailureResponse(res, error);
    }
}

exports.getFileContent = async function (req, res){
    try{
        const fileName = req.query.file_name
        const content = await utils.getFileContent(fileName)
        requestUtils.retrunSuccessResponse(res, content)
    } catch (error){
        console.log(error.stack)
        requestUtils.retrunFailureResponse(res, error);
    }
}
