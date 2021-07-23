import React from "react";

export const HistoryGameItem = ({ color }) => {
  switch (color) {
    case "win":
      return <li className="sheet__item-history-game green"></li>;
    case "loss":
      return <li className="sheet__item-history-game red"></li>;
    default:
      return <li className="sheet__item-history-game"></li>;
  }
};
