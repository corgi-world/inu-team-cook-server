import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.json());

import cors from "cors";
app.use(cors());

const url = "http://13.209.73.95:8000";

import axios from "axios";
const api = axios.create({
  baseURL: `${url}/topic/`,
});

app.get("/topic", async function (req, res) {
  const r = await api.get("");
  try {
    res.send(r.data);
  } catch {
    res.send({
      1: "코로나 19",
      2: "확진자",
      3: "윌스미스",
      4: "서른 아홉",
      5: "블랙리스트 수사",
      6: "손흥민",
      7: "호날두",
      8: "포켓몬 빵",
      9: "현빈",
      10: "손예진",
      11: "햄버거",
      12: "피자",
      13: "남주혁",
      14: "SK",
      15: "삼성전자",
      16: "코스피",
      17: "결혼식 코로나",
      18: "주식 동향",
      19: "안철수",
      20: "문재인",
      21: "8k 티비",
      22: "중국 폴더블폰",
      23: "계곡 익사 사건",
      24: "브로치",
      25: "김정숙 여사",
      26: "김건희",
      27: "자가진단키트",
      28: "약국 약 부족",
      29: "코리안 좀비",
      30: "백신 접종 시기",
    });
  }
});

app.get("/", async function (req, res) {
  res.send("hello~");
});

app.listen(3300, function () {});
