import React from 'react';
import { HistoryGameItem } from './history-game-item/history-game-item';
import "./main.sass";

export const SheetItem = ({item}) => {
    const teamName = () => {
        if (item.teamId === item.results[0].homeId) {
            return item.results[0].homeName
        } else {
            return item.results[0].awayName
        }
    }
    return(
        <li className="sheet__item">
            <div className="sheet__item-main">
                <span className="sheet__id">{item.rank}</span>
                <img src={`https://dxugi372p6nmc.cloudfront.net/spdk/current/64x64/${item.teamId}/teamlogo.png`} alt="logo" className="sheet__img"/>
                <h3 className="sheet__name">{teamName()}</h3>
            </div>
            <div className="sheet__item-info">
                <ul className="sheet__list-text-info">
                    <li className="sheet__item-text-info">{item.matchesPlayed}</li>
                    <li className="sheet__item-text-info">{item.matchesWon}</li>
                    <li className="sheet__item-text-info">{item.matchesDraw}</li>
                    <li className="sheet__item-text-info">{item.matchesLost}</li>
                    <li className="sheet__item-text-info">{item.goalsScored}-{item.goalsConceded}</li>
                    <li className="sheet__item-text-info">{item.points}</li>
                </ul>
                <ul className="sheet__list-history-game">
                    {item.results.map((circle) => (
                        <HistoryGameItem key={circle.eventId} color={circle.outcome}/> 
                    ))}
                </ul>
            </div>
        </li>
    )
}
