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
  //   console.log("redis=>>", redis);
  //   string methods
  await redis.set("name", "vikas");
  //   let name = await redis.get("name");
  //   console.log("name=>>", name);

  //   redis.del("name", (err, res) => {
  //     console.log(res);
  //   });

  //   redis.set("name", "vikas", "EX", 10, (err, res) => {
  //     console.log(res);
  //   });

  //   redis.set("name", "vikas", "PX", 100000, (err, res) => {
  //     console.log(res);
  //   }); //used to set the expiry time in milliseconds

  //   redis.set("name", "vikas", "NX", (err, res) => {
  //     console.log(res);
  //   }); //used to set the key if it does not exist

  //   redis.append("name", " kumar", (err, res) => {
  //     console.log(res);
  //   });

  //   redis.set("count", 10, (err, res) => {
  //     console.log(res);
  //   });

  //   redis.incr("count", (err, res) => {
  //     console.log(res);
  //   });

  //   redis.incrby("count", 5, (err, res) => {
  //     console.log(res);
  //   });
  // same dec and decby

  //   redis.incrbyfloat("count", 0.6, (err, res) => {
  //     log(Number(res), typeof res);
  //   });

  //   redis.getrange("name", 0, 3, (err, res) => {
  //     log(res); //in this case last index is inclusive
  //   });

  //   redis.setrange("name", 6, " chaudhary", (err, res) => {
  //     log(res);
  //   });

  //   redis.strlen("name", (err, res) => {
  //     log(res);
  //   });

  redis.mset("name", "vikas", "age", 25, "city", "delhi", (err, res) => {
    log(res);
  });
})();
