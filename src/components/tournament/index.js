import React, { useState, useEffect } from "react";
import { gettingStages, gettingGroupsOfClubs } from "../services/ss2";
import { ErrorBoundary } from "../helpers/error";
import { useTheme } from "@emotion/react";
import { Sheet } from "./table/sheet";
import { Tab } from "./tab/tab";
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

export const TournamentTable = ({id}) => {
  const [tournamentGroupsOfClubsList, setTournamentGroupsOfClubsList] = useState();
  const [isLoader, setIsLoader] = useState(true);
  const [activeTab, setActiveTab] = useState("standing");
  const [isError, setIsError] = useState(false);
  const [stages, setStages] = useState();

  const handleTabClick = activeTab => () => {
    setActiveTab(activeTab);
  };

  // eslint-disable-next-line
  useEffect(async () => {
    try {
      setIsLoader(true);
      const responseStageId = await gettingStages(id.value.tournamentId, id.value.seasonId);
      await setStages(responseStageId);
    } catch (error) {
      setIsError(true);
    }
  }, [id]);

  // eslint-disable-next-line
  useEffect(async () => {
    try {
      if (stages) {
        setIsLoader(true);
        const response = await gettingGroupsOfClubs(id.value.tournamentId, activeTab === tabs[0] ? "" : activeTab, stages);
        setTournamentGroupsOfClubsList(response);
        setIsLoader(false);
      }
    } catch {
      setIsError(true);
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
