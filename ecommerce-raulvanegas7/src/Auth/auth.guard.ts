import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";



function validateRequest (request: Request){
    const myAuthorization = request.headers.authorization
    const validatedResult = myAuthorization?.split(" ")[1] ===  "emails@gmail.com12345"
    // console.log(validatedResult);    
    return validatedResult
}

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const foundRequest = context.switchToHttp().getRequest()        
        return validateRequest(foundRequest)
        
    }
}