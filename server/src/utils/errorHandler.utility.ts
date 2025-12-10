class ErrorHandler extends Error{
    statusCode:number;
    success:boolean;
    
    constructor(message:string,statusCode:number=404){
        super(message)
        this.statusCode=statusCode;
        this.message=message;
        this.success=false;

        Error.captureStackTrace(this,this.constructor)
    }
}

export  {ErrorHandler};