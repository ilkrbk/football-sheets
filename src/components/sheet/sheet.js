import React from 'react';
import { SheetHeader } from './sheet-header/sheet-header';
import { SheetItem } from "./sheet-item/sheet-item";

export const Sheet = ({data}) => {
    return(
        <section className="sheet">
            <SheetHeader />
            <ul className="sheet__list">
                {data.map((item) => (
                    <SheetItem key={item.rank} item={item}/>
                ))}
            </ul>
        </section>
    )
}
