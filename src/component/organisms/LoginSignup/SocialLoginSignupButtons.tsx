import React from "react";
import { VerticalCenter } from "../../../style";
import { GoogleLoginSignupButton, KakaoLoginSignupButton, NaverLoginSignupButton } from "../../molecules";

export const SocialLoginSignupButtons = () => {
    return (
        <VerticalCenter>
            <KakaoLoginSignupButton />
            <NaverLoginSignupButton />
            <GoogleLoginSignupButton />
        </VerticalCenter>
    );
};
