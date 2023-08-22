import express from "express";
import { getClanMembers } from "./functions/getClanMembers.js";
import { getPlayerInfo } from "./functions/getPlayerInfo.js";
import dotenv from "dotenv";
import { checkData } from "./fetch/checkData.js";
import { getClanInfo } from "./functions/getClanInfo.js";
import { getClanRaids } from "./functions/getClanRaids.js";

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/clans/capitalraidseasons", async (req, res) => {
  const clanTag = req.query.clanTag;
  const count = req.query.count;
  const data = await getClanRaids(clanTag, count);

  checkData(data, res);
});

app.get("/clans", async (req, res) => {
  const clanTag = req.query.clanTag;
  const data = await getClanInfo(clanTag);

  checkData(data, res);
});

app.get("/clanMembers", async (req, res) => {
  const clanTag = req.query.clanTag;
  const data = await getClanMembers(clanTag);

  checkData(data, res);
});

app.get("/player", async (req, res) => {
  const playerTag = req.query.playerTag;
  const data = await getPlayerInfo(playerTag);

  checkData(data, res);
});

app.listen(port, (err) => {
  if (err) return console.log(err);

  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
