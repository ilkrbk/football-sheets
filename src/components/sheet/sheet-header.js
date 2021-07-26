import React from "react";
import styled from "@emotion/styled";

const HeaderForSheetItems = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px 10px;

  > div,
  > ul {
    display: flex;
    align-items: center;
  }
`;

const Index = styled.span`
  width: 25px;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 40px;
`;

const TeamName = styled.h3`
  margin: 0;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TeamCharacteristicsName = styled.li`
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
  &:last-child {
    width: 58px;
    margin-right: 0;
  }
`;

const titles = ["M", "W", "D", "L", "GD", "P", "From"];

export const SheetHeader = () => (
  <HeaderForSheetItems>
    <div>
      <Index>#</Index>
      <TeamName>Club</TeamName>
    </div>
    <ul>
      {titles.map(title => (
        <TeamCharacteristicsName key={title}>{title}</TeamCharacteristicsName>
      ))}
    </ul>
  </HeaderForSheetItems>
);
