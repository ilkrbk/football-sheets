import React from 'react';
import "./main.sass";

export const SheetItem = () => {
    return(
        <li className="sheet__item">
            <div className="sheet__item-main">
                <span className="sheet__id">1</span>
                <img src="http://pngimg.com/uploads/fcb_logo/fcb_logo_PNG24.png" alt="logo" className="sheet__img"/>
                <h3 className="sheet__name">Barselona</h3>
            </div>
            <div className="sheet__item-info">
                <ul className="sheet__list-text-info">
                    <li className="sheet__item-text-info">12</li>
                    <li className="sheet__item-text-info">12</li>
                    <li className="sheet__item-text-info">12</li>
                    <li className="sheet__item-text-info">12</li>
                    <li className="sheet__item-text-info">31-12</li>
                    <li className="sheet__item-text-info">12</li>
                </ul>
                <ul className="steet__list-history-game">
                    <li className="steet__item-history-game"></li>
                    <li className="steet__item-history-game"></li>
                    <li className="steet__item-history-game"></li>
                    <li className="steet__item-history-game"></li>
                    <li className="steet__item-history-game"></li>
                    <li className="steet__item-history-game"></li>
                </ul>
            </div>
        </li>
    )
}
