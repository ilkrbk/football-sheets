import React from 'react';
import { SheetHeader } from './sheet-header/sheet-header';
import { SheetItem } from "./sheet-item/sheet-item";


export const Sheet = () => {
    return(
        <section className="sheet">
            <SheetHeader />
            <ul className="sheet__list">
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
                <SheetItem/>
            </ul>
        </section>
    )
}
