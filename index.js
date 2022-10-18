import axios from "axios";
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";

import championdata from "./champion.js";
import {
  getGameDataByMatchId,
  getIngameDataById,
  getRecentGameData,
  getSummonerDataByName,
  getUserDataById,
} from "./riotapi.js";
const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
client.on("messageCreate", (msg) => {
  if (msg.content === "Cathelp") {
    msg.reply(
      `" ![소환사닉네임]    >>    소환사 인게임 정보확인 " \n\n " @[소환사닉네임]    >>    소환사 정보확인 " \n\n " 멀티서치 기능 " \n`
    );
  } else if (msg.content[0] === "!") {
    const name = msg.content.substring(1);
    msg.reply(" 소환사  " + name + "  인게임 정보를 확인하겠습니다");

    async function getData() {
      let SummonerData = await getSummonerDataByName(name);
      let { id, accountId, puuid, profileIconId, summonerLevel } =
        await SummonerData.data;

      let InGameData = await getIngameDataById(id);
      if (InGameData === undefined) {
        msg.reply("게임 안하는중");
      } else {
        const { gameMode, gameLength, participants } = await InGameData.data;

        let teamB = [],
          teamP = [];

        participants.map((p) =>
          p.teamId === 100 ? teamB.push(p) : teamP.push(p)
        );

        await setTimeout(function () {
          const IngameEmbed = new EmbedBuilder().setDescription(
            gameMode +
              " " +
              parseInt(gameLength / 60) +
              "분 " +
              (gameLength % 60) +
              "초\n"
          );
          for (let i = 0; i < 5; i++) {
            championdata.map((c) => {
              c.key === teamB[i].championId.toString()
                ? (teamB[i].championName = c.name)
                : {},
                c.key === teamP[i].championId.toString()
                  ? (teamP[i].championName = c.name)
                  : {};
            });
            IngameEmbed.addFields({
              name: teamB[i].summonerName,
              value: `${teamB[i].championName}`,
              inline: true,
            });
            IngameEmbed.addFields({
              name: "\u200B",
              value: "\u200B" + "\u200B",
              inline: true,
            });
            IngameEmbed.addFields({
              name: teamP[i].summonerName,
              value: `${teamP[i].championName}`,
              inline: true,
            });
          }
          msg.channel.send({ embeds: [IngameEmbed] });
        }, 2000);
      }
    }
    getData();
  } else if (msg.content[0] === "@") {
    const name = msg.content.substring(1);
    msg.reply("소환사 " + name + " 정보를 확인");
    async function getSummonerData() {
      try {
        let response = await getSummonerDataByName(name);
        let { id, accountId, puuid, profileIconId, summonerLevel } =
          await response.data;

        response = await getUserDataById(id);
        let userData = response.data;
        let freeRank, soloRank;
        if (userData[0] === undefined) {
          //UnRanked 둘다 한판도안함
          soloRank = undefined;
          freeRank = undefined;
        } else if (userData[0].queueType === "RANKED_SOLO_5x5") {
          //솔랭만함
          soloRank = userData[0];
          if (userData[1] !== undefined) {
            freeRank = userData[1];
          }
        } else {
          freeRank = userData[0];
          if (userData[1] !== undefined) {
            soloRank = userData[1];
          }
        }

        setTimeout(function () {
          msg.channel.send({
            embeds: [
              {
                author: {
                  name: name,
                  icon_url: `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/${profileIconId}.png`,
                  url: `https://www.op.gg/summoners/kr/${name}`,
                },
                description: summonerLevel + "레벨\n",
                url: `https://www.op.gg/summoners/kr/${name}`,
                thumbnail: {
                  url: `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/profileicon/${profileIconId}.png`,
                },
                fields: [
                  {
                    name: "솔로랭크",
                    value:
                      soloRank !== undefined
                        ? `
                        승률:${parseInt(
                          (soloRank.wins / (soloRank.wins + soloRank.losses)) *
                            100
                        )}%   승:${soloRank.wins}    패:${soloRank.losses}
                        티어: ${soloRank.tier} ${soloRank.rank}
                        `
                        : "UnRanked",
                  },
                  {
                    name: "자유랭크",
                    value:
                      freeRank !== undefined
                        ? `
                        승률:${parseInt(
                          (freeRank.wins / (freeRank.wins + freeRank.losses)) *
                            100
                        )}%   승:${freeRank.wins}    패:${freeRank.losses}
                        티어: ${freeRank.tier} ${freeRank.rank}
                        `
                        : "UnRanked",
                  },
                ],
              },
            ],
          });
        }, 2000);
      } catch (e) {
        console.log(e);
      }
    }
    getSummonerData();
  } else if (msg.content.includes("님이 로비에 참가하셨습니다.")) {
    let str = msg.content;
    let names = [];
    let temp = str.split("\n");
    temp.map((name) => {
      let i = 1;
      while (1) {
        if (i == name.length) break;
        if (name.substring(i) === "님이 로비에 참가하셨습니다.") {
          names.push(name.slice(0, i));
          break;
        }
        i++;
      }
    });
    if (names.length == 0) return;

    msg.reply("우리팀 정보를 검색하겠습니다");
    console.log(names);
    let teamdata = [];
    async function getTeamData() {
      try {
        names.map(async (name) => {
          let response = await getSummonerDataByName(name);
          let { id, accountId, puuid, profileIconId, summonerLevel } =
            response.data;

          response = await getUserDataById(id);
          let userData = await response.data;

          let soloRank = undefined,
            freeRank = undefined;
          if (userData[0] === undefined) {
            //UnRanked 둘다 한판도안함
            soloRank = undefined;
            freeRank = undefined;
          } else if (userData[0].queueType === "RANKED_SOLO_5x5") {
            //솔랭만함
            soloRank = userData[0];
            if (userData[1] !== undefined) {
              freeRank = userData[1];
            }
          } else {
            freeRank = userData[0];
            if (userData[1] !== undefined) {
              soloRank = userData[1];
            }
          }
          teamdata.push(soloRank);
        });
      } catch (e) {
        msg.reply("오류발생");
      }

      await setTimeout(function () {
        const InLobbyEmbed = new EmbedBuilder().setTitle("로비창이다냥");
        teamdata.map((team) =>
          team === undefined
            ? InLobbyEmbed.addFields({ name: "undefined", value: "undefined" })
            : InLobbyEmbed.addFields({
                name: team.summonerName,
                value:
                  team !== undefined
                    ? " " +
                      team.tier +
                      team.rank +
                      "  승률: " +
                      team.wins +
                      "승 " +
                      team.losses +
                      "패 " +
                      parseInt((100 * team.wins) / (team.wins + team.losses)) +
                      "%\n"
                    : "UnRanked\n",
              })
        );
        msg.channel.send({ embeds: [InLobbyEmbed] });
      }, 1000);
    }
    getTeamData();
  }
});
client.login(process.env.TOKEN);
