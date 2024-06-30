const sendResponse = (req,res, code, message, data) => {
    
    let resBody = {
        code:code,
        message:message
    }
    if(data !== undefined ) {
        resBody.data = data
    }
    
    return res.status(code).send(resBody)
}

module.exports = {
    sendResponse,
}