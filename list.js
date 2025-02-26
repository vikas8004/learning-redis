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
  //  list methods
  //   redis.lpush(
  //     "names",
  //     "jatin",
  //     "rohan",
  //     "akash",
  //     "amit",
  //     "harshit",
  //     "krish",
  //     "akhilesh",
  //     (err, res) => {
  //       log(res);
  //     }
  //   );

  //   redis.rpush("names", "rohan", (err, res) => {
  //     log(res);
  //   });

  //   redis.llen("names", (err, res) => {
  //     log(res);
  //   });

  //   redis.lrange("names", 0, -1, (err, res) => {
  //     console.log(res);
  //   });

  //   redis.lpop("names", (err, res) => {
  //     log(res);
  //   });

  //   redis.rpop("names", (err, res) => {
  //     log(res);
  //   });

  //   redis.linsert("names", "BEFORE", "akhilesh", "akash", (err, res) => {
  //     log(res);
  //   });
  //

  //   redis.linsert("names", "after", "akhilesh", "akash", (err, res) => {
  //     log(res);
  //   });

  //   redis.lset("names", 2, "adarsh", (err, res) => {
  //     log(res);
  //   }); //modify the value at that index in this case at(2)

  //   redis.lrem("names", 4, "akash", (err, res) => {
  //     log(res);
  //   });

  //   redis.ltrim("names", 1, 4, (req, res) => {
  //     log(res);
  //   });

  //   redis.lindex("names", 3, (err, res) => {
  //     console.log(res);
  //   });

  //   redis.lpushx("employee", "vikas", (err, res) => {
  //     log(res);
  //   }); //pushes if the list exist

  redis.lrange("names", 0, -1, (err, res) => {
    log("list", res);
  });
})();
