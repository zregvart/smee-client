/// <reference types="express" />
declare namespace Express {
    export interface Response {
        /**
         * @summary Send an event to the client
         */
        json(obj: any, type: string): void;
    }
}

declare module "connect-sse" {
    import express = require('express');
    function sse(): express.RequestHandler;
    export = sse;
}