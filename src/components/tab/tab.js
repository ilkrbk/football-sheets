import React from "react";

export const Tab = ({ click, tab, activeTab }) => {
  return (
    <li onClick={() => click(tab)} className={`tab__item ${activeTab === tab ? "tab__item-active" : ""}`}>
      {tab}
    </li>
  );
};
