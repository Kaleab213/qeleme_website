import { Strategy } from "passport-jwt";
import { Request } from 'express';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    constructor();
    validate(req: Request, Payload: any): any;
}
export {};
