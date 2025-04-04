import React from "react";
import { LoginSignupForm } from "../../organisms";
import { Center, Margin } from "../../../style/";
import { TextButton, TitleText } from "../../atoms";
import { useNavigate } from "react-router-dom";

export const LoginSignup = () => {
    const navigate = useNavigate();

    const moveSignupPage = () => {
        navigate("/signup");
    };

    return (
        <Center>
            <TitleText text="title" component="h3" variant="h3" />
            <LoginSignupForm></LoginSignupForm>
            <Margin>
                <TextButton text="회원가입" onClick={moveSignupPage}></TextButton>
            </Margin>
        </Center>
    );
};
