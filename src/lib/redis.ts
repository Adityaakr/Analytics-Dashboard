import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-grateful-dolphin-40308.upstash.io",
  token: process.env.REDIS_KEY!,
});


