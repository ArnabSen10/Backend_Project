class apiResponse{
    constructor(statusCode, data, message="Success"){
        this.statusCode= statusCode
        this.data = data
        this.message = message
        this.success = statusCode<400 //greater than that will be api errors
    }
}

export { apiResponse }

//server has status codes and it tells wheather a specific http request is successfully completed 
// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)