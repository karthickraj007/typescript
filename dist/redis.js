"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
async function connectRedis() {
    const client = (0, redis_1.createClient)();
    try {
        await client.connect();
        console.log("Connected to Redis");
    }
    catch (err) {
        console.error("Error connecting to Redis:", err);
    }
}
connectRedis();
