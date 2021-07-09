exports.retrunSuccessResponse = function(res,data){
    res.json(data);
}

exports.retrunFailureResponse = function(res, error){
    res.status(500).json(error.toString());
}