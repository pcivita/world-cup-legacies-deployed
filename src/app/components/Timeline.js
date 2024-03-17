"use client"
import React from "react"
import { Chrono } from "react-chrono";
import { useEffect, useState } from "react";

export default function Home() {
    const [items, setItems] = useState(null);

    // avoid "window is not defined" error
    useEffect(() => {
        setTimeout(() => {
            const newItems = [{
                title: "Uruguay, 1930",
              }, {
                  title: "Italy, 1934",
              }, {
                  title: "France, 1938",
              }, {
                  title: "Brazil, 1950",
              }, {
                  title: "Switzerland, 1954",
              }, {
                  title: "Sweden, 1958",
              }, {
                  title: "Chile, 1962",
              }, {
                  title: "England, 1966",
              }, {
                  title: "Mexico, 1970",
              }, {
                  title: "West Germany, 1974",
              }, {
                  title: "Argentina, 1978",
              }, {
                  title: "Spain, 1982",
              }, {
                  title: "Mexico, 1986",
              }, {
                  title: "Italy, 1990",
              }, {
                  title: "United States, 1994",
              }, {
                  title: "France, 1998",
              }, {
                  title: "Japan and South Korea, 2002",
              }, {
                  title: "Germany, 2006",
              }, {
                  title: "South Africa, 2010",
              }, {
                  title: "Brazil, 2014",
              }, {
                  title: "Russia, 2018",
              }, {
                  title: "Qatar, 2022",
              },
              ];
            setItems(newItems.reverse());
          }, 1000);  
    }, []);

    return (
      <div>
        { items ? (
            <Chrono 
            className="text-center" 
            items={items} 
            mode="HORIZONTAL" 
            cardLess="true"
            theme={{
                primary: 'gray',
                secondary: 'white',
                titleColor: 'black',
            }}
        />
        ) : (<p className="text-center italic">Loading...</p>)
        }
      </div>
    )
  }