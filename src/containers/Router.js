import React from "react";
import { Route, Routes } from "react-router-dom";

import Onboarding from "./Onboarding";

function Router() {
    return (
        <Routes>
            <Route index element={<Onboarding />} />
        </Routes>
    );
}

export default Router;
