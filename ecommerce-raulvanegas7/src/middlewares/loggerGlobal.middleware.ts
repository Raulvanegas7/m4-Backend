import { NextFunction, Request, Response } from "express";


export function LoggerGlobal(req: Request, res: Response, next: NextFunction){
    // const date = new Date().toLocaleTimeString()
    const date = new Date().toISOString()
    console.log(`Esto muestra: ${req.method} ${req.url} at [${date}]`)
    next()
}