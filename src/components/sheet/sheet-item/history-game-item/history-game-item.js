import React from 'react';

export const HistoryGameItem = ({color}) => {
    if (color === 'win') {
        return <li className="sheet__item-history-game green"></li>
    } else if (color === 'loss') {
        return <li className="sheet__item-history-game red"></li>
    } else {
        return <li className="sheet__item-history-game"></li>
    }
}