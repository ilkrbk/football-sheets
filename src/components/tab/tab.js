import React from 'react';

export const Tab = ({text, click, type, activeTab, stageId}) => {
    if (activeTab === type) {
        return <li onClick={() => (click(type, stageId))} className="tab__item tab__item-active">{text}</li>
    }
    return <li onClick={() => (click(type, stageId))} className="tab__item">{text}</li>
}
