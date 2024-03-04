import React from "react"
import { Chrono } from "react-chrono";

export const Timeline = ( {items, theme} ) => {
    return (
        <div style={{ height: "400px" }}>
            <Chrono 
                items={items} 
                mode="HORIZONTAL" 
                showAllCardsHorizontal 
                highlightCardsOnHover 
                cardWidth={200}
                cardHeight={170}
                theme={theme}
            />
        </div>
    );
};
