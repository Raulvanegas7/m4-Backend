import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";

function validateRequest (request1: Request){
    const Authorizati = request1.headers.authorization
    return Authorizati === "emails@gmail.com:password"
}

@Injectable()
export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request2 = context.switchToHttp().getRequest()
        return (validateRequest(request2))
        
    }
}