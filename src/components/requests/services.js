import axios from "axios";

export const GettingGroupsOfClubs = async (tournamentId, type, stages) => {
  const GroupsOfClubs = [];
  for (let i = 0; i < stages.length; i++) {
    if (!stages[i].isCup) {
      const response = await axios
        .get(`https://ss2.tjekscores.dk/tournaments/${tournamentId}/standings?&addResults=true&resultsLimit=6&type=${type}&form=last&stageId=${stages[i].id}`)
        .catch(() => {
          throw new Error(Error);
        });
      await GroupsOfClubs.push(response.data.sort((a, b) => (a.points > b.points ? -1 : 1)));
    }
  }
  return GroupsOfClubs;
};

export const GettingStages = async (tournamentId, seasonId) => {
  const response = await axios.get(`https://ss2.tjekscores.dk/tournaments/${tournamentId}/season?seasonId=${seasonId}`).catch(() => {
    throw new Error(Error);
  });
  return response.data.season.stages;
};
