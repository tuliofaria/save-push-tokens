require("dotenv").config();

const { Redis } = require("@upstash/redis");

const clearIt = async () => {
  const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
  });

  await redis.del("tokens");
};

export default async function handler(req, res) {
  await clearIt(req.body.key);
  res.status(200).json({ message: "OK" });
}

//saveIt("aa1s");
