import React from "react";
import CarsList from "./cars-list"
import Details from "../carTest/details"


const WebPage = () =>(
    <div>
        <h3>Cars</h3>
        <CarsList />
        <hr></hr>
        <h3>Details</h3>
        <Details />
    </div>
);

export default WebPage;