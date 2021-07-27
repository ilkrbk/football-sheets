import React from "react";
import styled from "@emotion/styled";

const ItemLiForSheet = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  > div {
    display: flex;
    align-items: center;

    &:last-child > ul {
      display: flex;
      &:last-child {
        width: 60px;
      }
    }
  }
`;

const TeamIndex = styled.span`
  width: 25px;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  margin-right: 40px;
`;

const TeamLogo = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 30px;
`;

const TeamName = styled.h3`
  margin: 0;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const ItemOfCharacteristicsTeam = styled.li`
  width: 18px;
  margin-right: 25px;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  &:first-of-type,
  &:nth-of-type(4) {
    margin-right: 50px;
  }
  &:nth-of-type(5) {
    width: 50px;
  }
`;

const CircleOfResultGame = styled.li`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ color, theme }) => (color === "win" ? theme.colors.win : color === "loss" ? theme.colors.loss : theme.colors.draw)};
  margin-right: 2px;
  &:last-child {
    margin: 0;
  }
`;

export const SheetItem = ({ item, index }) => {
  const сharacteristicsTeamArray = [item.matchesPlayed, item.matchesWon, item.matchesDraw, item.matchesLost, item.goalsScored - item.goalsConceded, item.points];
  const teamName = () => {
    if (item.teamId === item.results[0].homeId) {
      return item.results[0].homeName;
    } else {
      return item.results[0].awayName;
    }
  };
  return (
    <ItemLiForSheet>
      <div>
        <TeamIndex>{index + 1}</TeamIndex>
        <TeamLogo src={`https://dxugi372p6nmc.cloudfront.net/spdk/current/64x64/${item.teamId}/teamlogo.png`} alt={`logo`} />
        <TeamName>{teamName()}</TeamName>
      </div>
      <div>
        <ul>
          {сharacteristicsTeamArray.map((element, index) => (
            <ItemOfCharacteristicsTeam key={index}>{element}</ItemOfCharacteristicsTeam>
          ))}
        </ul>
        <ul>
          {item.results.map(circle => (
            <CircleOfResultGame key={circle.eventId} color={circle.outcome} />
          ))}
        </ul>
      </div>
    </ItemLiForSheet>
  );
};
