import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "../component/page";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
