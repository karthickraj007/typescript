import { createClient } from 'redis';


async function connectRedis() {
    const client = createClient()

    try {
        await client.connect();
        console.log("Connected to Redis");
    } catch (err) {
        console.error("Error connecting to Redis:", err);
    }
}

connectRedis();