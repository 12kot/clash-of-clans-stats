import express from "express";
import { getClanMembers } from "./functions/getClanMembers.js";
import { getPlayerInfo } from "./functions/getPlayerInfo.js";
import dotenv from "dotenv";
import { checkData } from "./fetch/checkData.js";
import { getClanInfo } from "./functions/getClanInfo.js";
import { getClanRaids } from "./functions/getClanRaids.js";
import { getTopPlayer } from "./functions/cards/cards/getTopPlayer.js";
import { getMostPopularPlayer } from "./functions/cards/cards/getMostPopularPlayer.js";
import { getMostPopularClan } from "./functions/cards/cards/getMostPopularClan.js";
import { searchClan } from "./functions/search/searchClan.js";
import { searchPlayer } from "./functions/search/searchPlayer.js";

dotenv.config();

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
app.use("/public", express.static("public"));

app.get("/cards/player/top", async (req, res) => {
  const data = await getTopPlayer();

  if (typeof data.ok === "boolean") await checkData(data, res);
  else res.send(data);
});

app.get("/cards/player/popular", async (req, res) => {
  const data = await getMostPopularPlayer();

  if (typeof data.ok === "boolean") await checkData(data, res);
  else res.send(data);
});

app.get("/cards/clan/popular", async (req, res) => {
  const data = await getMostPopularClan();

  if (typeof data.ok === "boolean") await checkData(data, res);
  else res.send(data);
});

app.get("/clans/capitalraidseasons", async (req, res) => {
  const clanTag = req.query.clanTag;
  const count = req.query.count;
  const data = await getClanRaids(clanTag, count);

  await checkData(data, res);
});

app.get("/clans", async (req, res) => {
  const clanTag = req.query.clanTag;
  const data = await getClanInfo(clanTag);

  await checkData(data, res);
});

app.get("/search/clan", async (req, res) => {
  const name = req.query.name;
  const limit = req.query.limit;
  const data = await searchClan(name, limit);

  if (typeof data.ok === "boolean") await checkData(data, res);
  else res.send(data);
});

app.get("/search/player", async (req, res) => {
  const tag = req.query.tag;
  const data = await searchPlayer(tag);

  if (typeof data.ok === "boolean") await checkData(data, res);
  else res.send(data);
});

app.get("/clan/members", async (req, res) => {
  const clanTag = req.query.clanTag;
  const data = await getClanMembers(clanTag);

  await checkData(data, res);
});

app.get("/players", async (req, res) => {
  const playerTag = req.query.playerTag;
  const data = await getPlayerInfo(playerTag);

  await checkData(data, res);
});

app.listen(port, (err) => {
  if (err) return console.log(err);

  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
