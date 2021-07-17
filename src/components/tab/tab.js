import React from 'react';

export const Tab = ({text, click, type, activeTab}) => {
    if (activeTab === type) {
        return <li onClick={() => (click(type))} className="tab__item tab__item-active">{text}</li>
    }
    return <li onClick={() => (click(type))} className="tab__item">{text}</li>
}
