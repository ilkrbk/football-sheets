import React from 'react';
import "./main.sass";

export const SheetHeader = () => {
    return(
        <header className="sheet__header">
            <div className="sheet__header-main">
                <span className="sheet__header-id">#</span>
                <h3 className="sheet__header-name">Club</h3>
            </div>
            <ul className="sheet__header-list-info">
                <li className="sheet__header-item-info">M</li>
                <li className="sheet__header-item-info">W</li>
                <li className="sheet__header-item-info">D</li>
                <li className="sheet__header-item-info">L</li>
                <li className="sheet__header-item-info">GD</li>
                <li className="sheet__header-item-info">P</li>
                <li className="sheet__header-item-info">From</li>
            </ul>
        </header>
    )
}
