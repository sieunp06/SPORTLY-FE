import React from "react";
import { LoginSignupForm } from "../../organisms";
import { Center, VerticalCenter } from "../../../style/";
import { Typography } from "@mui/material";
import { TextButton } from "../../atoms";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
    const navigate = useNavigate();

    const moveSignupPage = () => {
        navigate("/signup");
    };

    return (
        <Center>
            <VerticalCenter>
                <Typography component="h3" variant="h3" css="Center">
                    TITLE
                </Typography>
            </VerticalCenter>
            <LoginSignupForm></LoginSignupForm>
            <TextButton text="회원가입" onClick={moveSignupPage}></TextButton>
        </Center>
    );
};
