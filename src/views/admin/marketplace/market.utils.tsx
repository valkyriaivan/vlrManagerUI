import axios from "axios";
import mockDataMe from "./mockDataMe.json";

const league = "8305f19e46a448ff935fce298a3302b6";
const token = "4b1263a6a70bc6b05e20e63620e5ef6e0953aaaa";
export const getMarketPlayers = async () => {
  const res = await axios.get(
    "api/leagues/8305f19e46a448ff935fce298a3302b6/market",
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return res.data;
};

export const getUserData = async () => {
  const res = await axios.get(
    "api/leagues/8305f19e46a448ff935fce298a3302b6/me",
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  console.log(res.data);
  return res.data;
};

export const getRanking = async () => {
  const res = await axios.get(
    "api/leagues/8305f19e46a448ff935fce298a3302b6/clasification",
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return res.data;
};

export const getHistory = async () => {
  const res = await axios.get(
    "api/leagues/8305f19e46a448ff935fce298a3302b6/notices",
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
  );
  return res.data;
};
