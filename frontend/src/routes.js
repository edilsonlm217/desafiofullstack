import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Search from "./pages/Search";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/search" component={Search}/>
        </BrowserRouter>
    );
}