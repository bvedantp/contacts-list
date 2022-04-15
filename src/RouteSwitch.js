import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const RouteSwitch = ()=> {
    // basename="/contact-list" for browserRouter
    return(
        <BrowserRouter> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/edit-contact/:id" element={<EditContact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch