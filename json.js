import Redis from "ioredis";
const { log } = console;
async function connectRedis() {
  const redis = new Redis({
    host: "redis-18681.c322.us-east-1-2.ec2.redns.redis-cloud.com",
    port: 18681,
    password: "qgEHF7Yo2sxsredUSsUwygjTuqnevF8D"
  });
  redis.on("connect", err => {
    if (err) {
      return console.log("redis=>>", err);
    }
    console.log("redis connected");
  });
  return redis;
}
(async () => {
  const redis = await connectRedis();
})();
