import React from 'react';
import "./main.sass";

export const SheetHeader = () => {
    const titles = ['M', 'W', 'D', 'L', 'GD', 'P', 'From']
    return(
        <header className="sheet__header">
            <div className="sheet__header-main">
                <span className="sheet__header-id">#</span>
                <h3 className="sheet__header-name">Club</h3>
            </div>
            <ul className="sheet__header-list-info">
                {titles.map((title, index) => (
                    <li key={index} className="sheet__header-item-info">{title}</li>
                ))}
            </ul>
        </header>
    )
}
