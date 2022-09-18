const ErrorHandler = require("../errors/ErrorHandler");

function apiKey(req,res,next){
    const api_key = '1234567';

    console.log(req.query.api_key);
    
    if(req.query.api_key &&(req.query.api_key === api_key)){
        next();
        
    }
    else{
        // res.json({
        //     message:'Not-Allowed'
        // });
        next(ErrorHandler.forbidden('Api Key Is Not Valid'))
    }
}



module.exports = apiKey;