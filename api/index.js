require("dotenv").config();

const { Redis } = require("@upstash/redis");

const getIt = async () => {
  const redis = new Redis({
    url: process.env.REDIS_URL,
    token: process.env.REDIS_TOKEN,
  });

  const data = await redis.lrange("tokens", 0, 1000);
  console.log(data);
  return data;
};

export default async function handler(req, res) {
  const data = await getIt();
  res.status(200).json({ data });
}

//getIt();
