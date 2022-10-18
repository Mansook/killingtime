import axios from "axios";

export const getSummonerDataByName = async (name) => {
  try {
    const response = await axios.get(
      encodeURI(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOTKEY}`
      )
    );
    return response;
  } catch (e) {
    console.log("소환사 정보 획득 실패!");
  }
};

export const getIngameDataById = async (id) => {
  try {
    const response = await axios.get(
      encodeURI(
        `https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${id}?api_key=${process.env.RIOTKEY}`
      )
    );
    return response;
  } catch (e) {
    console.log("게임 안하는중 !");
  }
};

export const getUserDataById = async (id) => {
  try {
    const response = await axios.get(
      encodeURI(
        `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${process.env.RIOTKEY}`
      )
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getRecentGameData = async (puuid) => {
  try {
    const response = await axios.get(
      encodeURI(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${process.env.RIOTKEY}`
      )
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getGameDataByMatchId = async (matchId) => {
  try {
    const response = await axios.get(
      encodeURI(
        `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.RIOTKEY}`
      )
    );
    return response;
  } catch (e) {
    //console.log(e);
  }
};
