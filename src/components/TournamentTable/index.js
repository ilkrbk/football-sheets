import React, { useState, useEffect } from "react";
import { GettingStages, GettingGroupsOfClubs } from "../requests/services";
import { ErrorBoundary } from "../error/error";
import { useTheme } from "@emotion/react";
import { Sheet } from "../sheet/sheet";
import { Tab } from "../tab/tab";
import Loader from "react-js-loader";
import styled from "@emotion/styled";

const tabs = ["standing", "home", "away"];

const PositionLoader = styled.div`
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
`;

const Tournament = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.mainBackgroung};
`;

const TabsList = styled.ul`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.colors.tabs};
`;

export const TournamentTable = ({ tournamentId, seasonId }) => {
  const [tournamentGroupsOfClubsList, setTournamentGroupsOfClubsList] = useState();
  const [isLoader, setIsLoader] = useState(true);
  const [activeTab, setActiveTab] = useState("standing");
  const [isError, setIsError] = useState(false);
  const [stages, setStages] = useState();

  const handleTabClick = activeTab => () => {
    setActiveTab(activeTab);
  };

  useEffect(() => {
    setIsLoader(true);
    async function fetch() {
      try {
        const responseStageId = await GettingStages(tournamentId, seasonId);
        await setStages(responseStageId);
      } catch (error) {
        setIsError(true);
      }
    }
    fetch();
  }, [tournamentId, seasonId]);

  useEffect(() => {
    async function fetch() {
      try {
        setIsLoader(true);
        const response = await GettingGroupsOfClubs(tournamentId, activeTab === tabs[0] ? "" : activeTab, stages);
        setTournamentGroupsOfClubsList(response);
        setIsLoader(false);
      } catch {
        setIsError(true);
      }
    }
    if (stages) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, stages]);

  const SheetLoader = () => {
    const theme = useTheme();
    return (
      <PositionLoader>
        <Loader type="spinner-circle" bgColor={theme.colors.text} size={70} />
      </PositionLoader>
    );
  };

  if (isError) {
    return <ErrorBoundary />;
  }
  return (
    <Tournament>
      <TabsList>
        {tabs.map(tab => (
          <Tab click={handleTabClick} tab={tab} key={tab} activeTab={activeTab} />
        ))}
      </TabsList>
      {isLoader ? <SheetLoader /> : <Sheet data={tournamentGroupsOfClubsList} />}
    </Tournament>
  );
};
