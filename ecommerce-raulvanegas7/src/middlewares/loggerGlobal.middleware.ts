import { NextFunction, Request, Response } from "express";


export function LoggerGlobal(req: Request, res: Response, next: NextFunction){
    const date = new Date().toDateString()
    console.log(`${req.method} ${req.url} at ${date}`)
    next()
}