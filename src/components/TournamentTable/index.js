import React, { useState, useEffect } from "react";
import { ErrorBoundary } from "../error/error";
import { Sheet } from "../sheet/sheet";
import { Tab } from "../tab/tab";
import Loader from "react-js-loader";
import axios from "axios";

const tabs = ["standing", "home", "away"];

export const TournamentTable = ({ id, seasonId }) => {
  const [tournamentClubsList, setTournamentClubsList] = useState();
  const [loader, setLoader] = useState(true);
  const [activeTab, setActiveTab] = useState("standing");
  const [isError, setIsError] = useState(false);
  const [stageId, setStageId] = useState();

  const tabClick = (type, stageId) => {
    try {
      setLoader(true);
      axios
        .get(`https://ss2.tjekscores.dk/tournaments/${id}/standings?&addResults=true&resultsLimit=6&type=${type}&form=last&stageId=${stageId}`)
        .then(response => setTournamentClubsList(response.data.sort((a, b) => (a.points > b.points ? -1 : 1))))
        .catch(error => {
          throw new Error(`Error ${error}`);
        })
        .finally(() => setLoader(false));
    } catch {
      setIsError(true);
    }
  };

  const GettingStageIDFromRequests = () => {
    try {
      axios
        .get(`https://ss2.tjekscores.dk/tournaments/${id}/season?seasonId=${seasonId}`)
        .then(response => {
          setStageId(response.data.season.stages[0].id);
        })
        .catch(error => {
          throw new Error(`Error ${error}`);
        });
    } catch {
      setIsError(true);
    }
  };

  useEffect(() => {
    tabClick(activeTab === tabs[0] ? "" : activeTab, stageId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, stageId]);

  useEffect(() => {
    GettingStageIDFromRequests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isError) {
    return <ErrorBoundary />;
  }
  return (
    <div className="App">
      <ul className="tab__list">
        {tabs.map(tab => (
          <Tab click={setActiveTab} tab={tab} key={tab} activeTab={activeTab} />
        ))}
      </ul>
      {loader ? <Loader type="spinner-circle" bgColor={"#015699"} size={50} /> : <Sheet data={tournamentClubsList} />}
    </div>
  );
};
