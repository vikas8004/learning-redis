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
app.get("/", async (req, res) => {
  (async () => {
    const redis = await connectRedis();
    //  if there is data in json corresponding to a key the it could be fetched in this way
    redis.keys("sample_bicycle:*", async (err, keys) => {
      let allData = keys.map(async key => {
        const data = await redis.call("json.get", key);
        return JSON.parse(data);
      });
      allData = await Promise.all(allData);

      res.status(200).send({
        allData
      });
    });
  })();
});
(async () => {
  const redis = await connectRedis();
  // redis.call(
  //   "json.mget",
  //   "sample_bicycle:1003",
  //   "sample_bicycle:1004",
  //   "$",
  //   (err, data) => {
  //     console.log(data.map(d => JSON.parse(d)[0]));
  //     // console.log(JSON.parse(data[0]));
  //   }
  // ); //getting more than one fields together

  // redis.call(
  //   "json.set",
  //   "sample_bicycle:1004",
  //   "$.model",
  //   `"bicycle 1004"`,
  //   (err, data) => {
  //     log(data);
  //   }
  // );

  // redis.call(
  //   "json.numincrby",
  //   "sample_bicycle:1004",
  //   "$.price",
  //   45,
  //   (err, data) => {
  //     log(data);
  //   }
  // );

  // redis.call(
  //   "json.arrappend",
  //   "sample_bicycle:1004",
  //   "$.addons",
  //   '"bell"',
  //   '"charger"',
  //   (err, data) => {
  //     log(data);
  //   }
  // );

  // redis.call("json.set", "sample_bicycle:1004", "$.age", 12, (err, data) => {
  //   log(data);
  // });

  // redis.call("json.del", "sample_bicycle:1004", "$.age", (err, data) => {
  //   log(data);
  // });

  // redis.call(
  //   "json.arrinsert",
  //   "sample_bicycle:1004",
  //   "$.addons",
  //   0,
  //   `"basket"`,//the extar wrap is needed
  //   (err, data) => {
  //     log(data);
  //   }
  // );

  // redis.call("json.type", "sample_bicycle:1004", "$.specs", (err, data) => {
  //   log(data);
  // });

  redis.call(
    "json.arrindex",
    "sample_bicycle:1004",
    "$.addons",
    `"bell"`,
    (err, data) => {
      log(data);
    }
  );
  redis.call("json.get", "sample_bicycle:1004", (err, data) => {
    log(JSON.parse(data));
  });
})();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
