import React from "react";
import styled from "@emotion/styled";

const TabElement = styled.li`
  display: flex;
  justify-content: center;
  width: calc(100% / 3);
  padding: 15px;
  font-family: "Roboto";
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.tabLine};
  position: relative;
  text-transform: capitalize;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ active, theme }) => (active ? theme.colors.activeTab : "none")};
  }

  &:hover {
    &::after {
      background: ${({ theme }) => theme.colors.activeTab};
    }
  }
`;

export const Tab = ({ click, tab, activeTab }) => {
  return (
    <TabElement onClick={click(tab)} active={activeTab === tab}>
      {tab}
    </TabElement>
  );
};
