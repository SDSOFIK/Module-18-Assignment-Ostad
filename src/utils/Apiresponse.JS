

const sendSuccess =(res , statusCode=200 , message = "Sueccess" , data={}) =>{
    return res.status(statusCode).json({
        "sussces": true,
        message,
        data
    });
};

const sendError = (res, statusCode=500, message = "something worng " , error = null)=>{
const body = {
    
    "Success": false,
    message
};
if(error) body.error = error;
return res.status(statusCode).json(body);

};


module.exports = {sendSuccess , sendError};

