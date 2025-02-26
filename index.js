import express from "express";
import Redis from "ioredis";

const app = express();
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
async function getKeys() {
  const res = await redis.call("json.get", "user:1", "name", "languages");
  console.log(res);

  const { name, languages } = JSON.parse(res);
  console.log(name, languages);
}
getKeys();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
