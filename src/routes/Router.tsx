import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "../component/pages";
import { LeagueSelectPage } from "../component/pages/LeagueSelectPage/LeagueSelectPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path="/league-pick" element={<LeagueSelectPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
