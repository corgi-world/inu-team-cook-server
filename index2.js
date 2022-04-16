import express from "express";
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.json());

import cors from "cors";
app.use(cors());

const END_POINT = "http://3.35.115.130:8000";

import axios from "axios";
const api = axios.create({
  baseURL: END_POINT,
  timeout: 1500,
});

app.get("/topic", async function (req, res) {
  try {
    const r = await api.get("/topic");
    res.send(r.data);
  } catch {
    res.send(SAMPLE_DATA);
  }
});

app.get("/", async function (req, res) {
  res.send("hello~");
});

app.listen(3300, function () {});

const SAMPLE_DATA = [
  {
    id: 94,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9E%A5%EA%B4%80&from=20210416&to=20220415",
    keyword: "장관",
    male: 63,
    female: 37,
    age_10: 2,
    age_20: 5,
    age_30: 19,
    age_40: 65,
    age_50: 47,
    age_60: 38,
    subject_1: "임혜숙",
    subject_2: "실화탐사대",
    subject_3: "노형욱",
    subject_4: "이종섭",
    subject_5: "도자기",
    search_1: "임혜숙 장관",
    search_2: "실화 탐사대",
    search_3: "문승욱 장관",
    search_4: "안경덕 장관",
    search_5: "안경덕",
  },
  {
    id: 95,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%8B%B9%EC%84%A0%EC%9D%B8&from=20210416&to=20220415",
    keyword: "당선인",
    male: 73,
    female: 27,
    age_10: 0,
    age_20: 5,
    age_30: 31,
    age_40: 54,
    age_50: 47,
    age_60: 37,
    subject_1: "매니페스토",
    subject_2: "정책",
    subject_3: "문재인",
    subject_4: "이재명",
    subject_5: "윤석열",
    search_1: "대통령 당선인",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 96,
    rankurl:
      "https://datatrend.kakao.com/result?q=%ED%9B%84%EB%B3%B4%EC%9E%90&from=20210416&to=20220415",
    keyword: "후보자",
    male: 70,
    female: 30,
    age_10: 0,
    age_20: 3,
    age_30: 17,
    age_40: 52,
    age_50: 51,
    age_60: 51,
    subject_1: "이재명",
    subject_2: "윤석열",
    subject_3: "임혜숙",
    subject_4: "대한민국 해양수산부",
    subject_5: "의회",
    search_1: "대통령 후보자 명단",
    search_2: "20 대 대통령 후보자 명단",
    search_3: "박준영 후보자",
    search_4: "이재명",
    search_5: "후보자 토론회 사회자",
  },
  {
    id: 97,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9E%85%ED%95%99&from=20210416&to=20220415",
    keyword: "입학",
    male: 46,
    female: 54,
    age_10: 0,
    age_20: 7,
    age_30: 17,
    age_40: 75,
    age_50: 49,
    age_60: 26,
    subject_1: "2023",
    subject_2: "조민",
    subject_3: "조민",
    subject_4: "가천대역",
    subject_5: "조국",
    search_1: "입학 용병 62",
    search_2: "입학 용병 59",
    search_3: "입학 용병 62 화",
    search_4: "입학 용병 50",
    search_5: "입학 용병 59 화",
  },
  {
    id: 98,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%A0%95%EC%B1%85&from=20210416&to=20220415",
    keyword: "정책",
    male: 57,
    female: 43,
    age_10: 2,
    age_20: 5,
    age_30: 16,
    age_40: 65,
    age_50: 58,
    age_60: 31,
    subject_1: "탄소 중립",
    subject_2: "매니페스토",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "소상공인 손실 보상",
    search_2: "소상공인 정책 자금 누리집",
    search_3: "소상공인 정책 자금 신청 방법",
    search_4: "소상공인 희망 회복 자금",
    search_5: "소상공인 희망 대출",
  },
  {
    id: 99,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%8C%80%ED%86%B5%EB%A0%B9&from=20210416&to=20220415",
    keyword: "대통령",
    male: 54,
    female: 46,
    age_10: 3,
    age_20: 7,
    age_30: 24,
    age_40: 73,
    age_50: 44,
    age_60: 23,
    subject_1: "아이티",
    subject_2: "올렉산드르 젤렌스키",
    subject_3: "후보",
    subject_4: "우크라이나",
    subject_5: "투표소",
    search_1: "대통령 후보자 명단",
    search_2: "아이티 대통령 암살",
    search_3: "20 대 대통령 취임 일",
    search_4: "허경영 지지율",
    search_5: "이재명 윤석열 지지율",
  },
  {
    id: 100,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EA%B5%90%EC%88%98&from=20210416&to=20220415",
    keyword: "교수",
    male: 61,
    female: 39,
    age_10: 3,
    age_20: 5,
    age_30: 14,
    age_40: 56,
    age_50: 52,
    age_60: 42,
    subject_1: "이왕재",
    subject_2: "김동길",
    subject_3: "영남대학교",
    subject_4: "0",
    subject_5: "0",
    search_1: "교수 점쟁이",
    search_2: "영남대 정호열 교수",
    search_3: "백승우 교수",
    search_4: "허니 제이 교수",
    search_5: "김노동 교수",
  },
  {
    id: 101,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9A%B0%ED%81%AC%EB%9D%BC%EC%9D%B4%EB%82%98&from=20210416&to=20220415",
    keyword: "우크라이나",
    male: 78,
    female: 22,
    age_10: 0,
    age_20: 2,
    age_30: 12,
    age_40: 61,
    age_50: 66,
    age_60: 31,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "0",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 102,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9D%B4%EC%86%A1&from=20210416&to=20220415",
    keyword: "이송",
    male: 67,
    female: 33,
    age_10: 0,
    age_20: 3,
    age_30: 17,
    age_40: 66,
    age_50: 59,
    age_60: 28,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "헤이 딜러 광고 모델 이송 경",
    search_2: "헤이 딜러 광고 모델",
    search_3: "신비 tv",
    search_4: "딴지 일보",
    search_5: "열린 공감 tv",
  },
  {
    id: 103,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%A4%91%EA%B5%AD&from=20210416&to=20220415",
    keyword: "중국",
    male: 67,
    female: 33,
    age_10: 2,
    age_20: 7,
    age_30: 21,
    age_40: 66,
    age_50: 47,
    age_60: 31,
    subject_1: "쇼트트랙",
    subject_2: "석탄",
    subject_3: "중",
    subject_4: "봉쇄",
    subject_5: "중국 축구 국가대표팀",
    search_1: "중국 대 사우디 아라비아",
    search_2: "중국 오징어 게임",
    search_3: "탈레반 중국",
    search_4: "그냥 중국 이 메달 모두 가져 가라고 하자",
    search_5: "베트남 중국 축구 중계",
  },
  {
    id: 104,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%97%AC%EC%84%B1&from=20210416&to=20220415",
    keyword: "여성",
    male: 46,
    female: 54,
    age_10: 2,
    age_20: 12,
    age_30: 21,
    age_40: 51,
    age_50: 58,
    age_60: 31,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "0",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 105,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9D%B8%EC%88%98%EC%9C%84&from=20210416&to=20220415",
    keyword: "인수위",
    male: 67,
    female: 33,
    age_10: 0,
    age_20: 3,
    age_30: 16,
    age_40: 61,
    age_50: 59,
    age_60: 35,
    subject_1: "윤석열",
    subject_2: "교수",
    subject_3: "안철수",
    subject_4: "부동산",
    subject_5: "이명박",
    search_1: "인수위 명단",
    search_2: "윤석열 인수위",
    search_3: "윤석열",
    search_4: "인수위 전문 위원",
    search_5: "안철수",
  },
  {
    id: 106,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9D%98%EC%9B%90&from=20210416&to=20220415",
    keyword: "의원",
    male: 60,
    female: 40,
    age_10: 0,
    age_20: 2,
    age_30: 14,
    age_40: 72,
    age_50: 58,
    age_60: 30,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "0",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 107,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%9F%AC%EC%8B%9C%EC%95%84&from=20210416&to=20220415",
    keyword: "러시아",
    male: 76,
    female: 24,
    age_10: 0,
    age_20: 3,
    age_30: 23,
    age_40: 84,
    age_50: 45,
    age_60: 17,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "우크라이나 러시아 전쟁 이유",
    search_2: "러시아 우크라이나 침공 이유",
    search_3: "우크라이나 러시아 전쟁",
    search_4: "우크라이나 전쟁",
    search_5: "러시아 올림픽 위원회",
  },
  {
    id: 108,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9E%85%EC%8B%9C&from=20210416&to=20220415",
    keyword: "입시",
    male: 43,
    female: 57,
    age_10: 7,
    age_20: 5,
    age_30: 16,
    age_40: 77,
    age_50: 54,
    age_60: 16,
    subject_1: "신한대학교",
    subject_2: "2023",
    subject_3: "텔레그램",
    subject_4: "연구소",
    subject_5: "서울여자대학교",
    search_1: "입시 평가 연구소 처벌",
    search_2: "중앙 대학교 입학처",
    search_3: "핑 프방",
    search_4: "입시 평가 연구소 2023",
    search_5: "싱글벙글 입시 미술",
  },
  {
    id: 109,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%8C%80%EA%B5%AC&from=20210416&to=20220415",
    keyword: "대구",
    male: 60,
    female: 40,
    age_10: 2,
    age_20: 7,
    age_30: 21,
    age_40: 77,
    age_50: 49,
    age_60: 21,
    subject_1: "노유정",
    subject_2: "유치원 교원",
    subject_3: "유아교사",
    subject_4: "FC 서울",
    subject_5: "남구청",
    search_1: "노유정",
    search_2: "대구 노유정",
    search_3: "대구 상간녀 사건 노유정",
    search_4: "대구 노유정 유치원 교사",
    search_5: "대구 노유정 얼굴",
  },
  {
    id: 110,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EA%B2%80%EC%B0%B0&from=20210416&to=20220415",
    keyword: "검찰",
    male: 78,
    female: 22,
    age_10: 0,
    age_20: 7,
    age_30: 19,
    age_40: 72,
    age_50: 56,
    age_60: 23,
    subject_1: "송영길",
    subject_2: "변호사 시험",
    subject_3: "김오수",
    subject_4: "공화제",
    subject_5: "사법연수원",
    search_1: "김오수 검찰 총장",
    search_2: "kidmo 검찰",
    search_3: "김오수",
    search_4: "윤석열 검찰 공화국",
    search_5: "검찰 공화국",
  },
  {
    id: 111,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%A1%B0%EC%94%A8&from=20210416&to=20220415",
    keyword: "조씨",
    male: 69,
    female: 31,
    age_10: 2,
    age_20: 5,
    age_30: 19,
    age_40: 58,
    age_50: 54,
    age_60: 38,
    subject_1: "예랑가랑",
    subject_2: "화순군",
    subject_3: "복수",
    subject_4: "전주 이씨",
    subject_5: "전주시",
    search_1: "예랑 가랑 조씨",
    search_2: "티비 조씨",
    search_3: "전주 이씨",
    search_4: "조씨 는 과학",
    search_5: "조씨 거른다",
  },
  {
    id: 112,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9D%B4%EC%9D%80%ED%95%B4&from=20210416&to=20220415",
    keyword: "이은해",
    male: 51,
    female: 49,
    age_10: 0,
    age_20: 2,
    age_30: 23,
    age_40: 82,
    age_50: 49,
    age_60: 19,
    subject_1: "부모",
    subject_2: "서강대",
    subject_3: "공범",
    subject_4: "비키니",
    subject_5: "남편",
    search_1: "이은해 부모",
    search_2: "계곡 살인",
    search_3: "이은해 카톡",
    search_4: "이은해 성매매",
    search_5: "윤상엽 서강대",
  },
  {
    id: 113,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9C%A4%EC%94%A8&from=20210416&to=20220415",
    keyword: "윤씨",
    male: 72,
    female: 28,
    age_10: 0,
    age_20: 5,
    age_30: 16,
    age_40: 63,
    age_50: 58,
    age_60: 35,
    subject_1: "조선 정조",
    subject_2: "의빈 성씨",
    subject_3: "윤봉길",
    subject_4: "윤석열",
    subject_5: "이재명",
    search_1: "윤석열 파평 윤씨 소정 공파",
    search_2: "윤봉길",
    search_3: "윤씨 본관 순위",
    search_4: "파평 윤씨 윤석열",
    search_5: "윤석열",
  },
  {
    id: 114,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%82%B4%EC%A0%95&from=20210416&to=20220415",
    keyword: "내정",
    male: 72,
    female: 28,
    age_10: 2,
    age_20: 10,
    age_30: 16,
    age_40: 58,
    age_50: 72,
    age_60: 19,
    subject_1: "황교익",
    subject_2: "사장",
    subject_3: "엘프",
    subject_4: "중국",
    subject_5: "아파트",
    search_1: "내정 중학교",
    search_2: "내정 초등학교",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 115,
    rankurl:
      "https://datatrend.kakao.com/result?q=%ED%95%9C%EA%B5%AD&from=20210416&to=20220415",
    keyword: "한국",
    male: 67,
    female: 33,
    age_10: 2,
    age_20: 3,
    age_30: 16,
    age_40: 59,
    age_50: 56,
    age_60: 37,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "0",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 116,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%AF%BC%EC%94%A8&from=20210416&to=20220415",
    keyword: "민씨",
    male: 73,
    female: 27,
    age_10: 2,
    age_20: 2,
    age_30: 12,
    age_40: 58,
    age_50: 59,
    age_60: 40,
    subject_1: "가루",
    subject_2: "조선 태종",
    subject_3: "조선 태조",
    subject_4: "족보",
    subject_5: "쿠민",
    search_1: "이방원 민씨",
    search_2: "원경 왕후 민씨",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 117,
    rankurl:
      "https://datatrend.kakao.com/result?q=%ED%9B%84%EB%B3%B4&from=20210416&to=20220415",
    keyword: "후보",
    male: 77,
    female: 23,
    age_10: 2,
    age_20: 7,
    age_30: 14,
    age_40: 58,
    age_50: 44,
    age_60: 52,
    subject_1: "세계수",
    subject_2: "사회주의",
    subject_3: "오준호",
    subject_4: "김혜경",
    subject_5: "김동연",
    search_1: "스승님 이 나의 남편 후보 를 골라 왔다",
    search_2: "윤석열 공약",
    search_3: "국힘 대선 후보",
    search_4: "국민 의 힘 대선 후보 경선",
    search_5: "오늘 대선 지지율",
  },
  {
    id: 118,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%96%91%EC%9C%A1%EB%B9%84&from=20210416&to=20220415",
    keyword: "양육비",
    male: 52,
    female: 48,
    age_10: 0,
    age_20: 2,
    age_30: 16,
    age_40: 107,
    age_50: 33,
    age_60: 16,
    subject_1: "여성가족부",
    subject_2: "시효",
    subject_3: "변호사",
    subject_4: "사유 소프트웨어",
    subject_5: "강제",
    search_1: "양육비 미지급 명단",
    search_2: "양육비 산정표",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 119,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%A7%80%EB%AA%85&from=20210416&to=20220415",
    keyword: "지명",
    male: 49,
    female: 51,
    age_10: 0,
    age_20: 3,
    age_30: 16,
    age_40: 68,
    age_50: 52,
    age_60: 35,
    subject_1: "FBI",
    subject_2: "대한민국의 국무총리",
    subject_3: "해저",
    subject_4: "황주연",
    subject_5: "저당권",
    search_1: "황주연",
    search_2: "지명 할당",
    search_3: "배송 지명 뜻",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 120,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9D%B8%EC%84%A0&from=20210416&to=20220415",
    keyword: "인선",
    male: 68,
    female: 32,
    age_10: 0,
    age_20: 3,
    age_30: 14,
    age_40: 66,
    age_50: 59,
    age_60: 31,
    subject_1: "윤석열",
    subject_2: "전지",
    subject_3: "SK바이오사이언스",
    subject_4: "내각과 외각",
    subject_5: "이재명",
    search_1: "sk 바이오 사이언스 주가",
    search_2: "hmm 주가",
    search_3: "타이거 차이나 전기차 주가",
    search_4: "장관 인선",
    search_5: "휴켐스 주가",
  },
  {
    id: 121,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EC%9E%90%EA%B8%88&from=20210416&to=20220415",
    keyword: "자금",
    male: 61,
    female: 39,
    age_10: 7,
    age_20: 5,
    age_30: 26,
    age_40: 56,
    age_50: 47,
    age_60: 33,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "0",
    search_2: "0",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 122,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EB%8B%B9%EC%84%A0%EC%9E%90&from=20210416&to=20220415",
    keyword: "당선자",
    male: 72,
    female: 28,
    age_10: 0,
    age_20: 2,
    age_30: 10,
    age_40: 45,
    age_50: 65,
    age_60: 52,
    subject_1: "윤석열",
    subject_2: "대한민국 제20대 대통령 선거",
    subject_3: "대통령 선거",
    subject_4: "국민의당",
    subject_5: "대통령",
    search_1: "대통령 선거",
    search_2: "대통령 당선자",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
  {
    id: 123,
    rankurl:
      "https://datatrend.kakao.com/result?q=%EA%B0%9C%EB%A7%89%EC%A0%84&from=20210416&to=20220415",
    keyword: "개막전",
    male: 76,
    female: 24,
    age_10: 3,
    age_20: 10,
    age_30: 31,
    age_40: 70,
    age_50: 47,
    age_60: 14,
    subject_1: "0",
    subject_2: "0",
    subject_3: "0",
    subject_4: "0",
    subject_5: "0",
    search_1: "야구 개막전",
    search_2: "프로 야구 개막전",
    search_3: "0",
    search_4: "0",
    search_5: "0",
  },
];
