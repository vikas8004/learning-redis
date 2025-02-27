import Redis from "ioredis";
import express, { json } from "express";
const { log } = console;
const app = express();
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
  //   redis.hset("users", "name", "John Doe", (req, res) => {
  //     log(res);
  //   });
  //   redis.hget("users", "name", (req, res) => {
  //     log(res);
  //   });

  //   redis.hmset(
  //     "users",
  //     {
  //       name: "Alice",
  //       age: "25", // Stored as a string
  //       city: "New York",
  //       balance: "99.99" // Stored as a string
  //     },
  //     (req, res) => {
  //       log(res);
  //     }
  //   );

  //   redis.hdel("users", "balance", (req, res) => {
  //     log(res);
  //   });

  //   redis.hexists("users", "name", (req, res) => {
  //     log(res);
  //   });

  //   redis.hlen("users", (req, res) => {
  //     log(res);
  //   });

  //   redis.hkeys("users", (req, res) => {
  //     log(res);
  //   });

  //   redis.hvals("users", (req, res) => {
  //     log(res);
  //   });

  //   redis.hincrby("users", "age", 8, (req, res) => {
  //     log(res);
  //   });

  //   redis.hrandfield("users", 2, (err, res) => {
  //     log(res);
  //   });

  redis.hscan("users", 0, "MATCH", "a*", "COUNT", 2, (err, res) => {
    log(res); // [ '0', [ 'age', '25', 'name', 'Alice' ] ]
  });
  redis.hgetall("users", (req, res) => {
    log(res);
  });
})();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
