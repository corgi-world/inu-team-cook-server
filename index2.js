import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.json());

import cors from "cors";
app.use(cors());

const END_POINT = "http://3.34.52.142:8000/";

import axios from "axios";
const api = axios.create({
  baseURL: END_POINT,
});

app.get("/topic", async function (req, res) {
  const r = await api.get("/topic");
  res.send(r.data);
});

app.get("/", async function (req, res) {
  res.send("hello~");
});

app.listen(3300, function () {});
