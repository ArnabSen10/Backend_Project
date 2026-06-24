class apiError extends Error{ //this "Error" is a class of node, we are overwrititng it
    constructor(
        statusCode,
        messsage= "Something Went Wrong!!!",
        errors=[],
        statck=""
    ){
        super(message) //overwriting the message
        this.statusCode=statusCode; //overwriting ther value of Error class
        this.data= null
        this.message=message
        this.success=false; //we are handling api errors
        this.errors=errors

        //this stack trace is to properly identify where the error is in which files
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {apiError}