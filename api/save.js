require("dotenv").config();

const { Redis } = require("@upstash/redis");

const saveIt = async (key) => {
  const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
  });

  await redis.lpush("tokens", key);
};

export default async function handler(req, res) {
  await saveIt(req.body.key);
  res.status(200).json({ message: "OK" });
}

//saveIt("aa1s");
