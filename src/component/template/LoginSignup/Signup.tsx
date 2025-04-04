import React from "react";
import { LoginSignupForm, SocialLoginSignupButtons } from "../../organisms";
import { Center, Margin } from "../../../style";
import { TextButton, TitleText } from "../../atoms";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const navigate = useNavigate();

    const moveLoginPage = () => {
        navigate("/login");
    };

    return (
        <Center>
            <TitleText text="title" component="h3" variant="h3" />
            <LoginSignupForm text="회원가입"></LoginSignupForm>
            <Margin>
                <TextButton text="이미 계정이 있습니다." onClick={moveLoginPage}></TextButton>
            </Margin>
            <SocialLoginSignupButtons />
        </Center>
    );
};
