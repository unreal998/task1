import React from "react";
import CarsList from "./containers/cars-list"
import Details from "../components/containers/details"


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