import React from "react";
import { VerticalCenter } from "../../../style";
import { GoogleLoginSignupButton, KakaoLoginSignupButton, NaverLoginSignupButton } from "../../moelcules";

export const SocialLoginSignupButtons = () => {
    return (
        <VerticalCenter>
            <KakaoLoginSignupButton />
            <NaverLoginSignupButton />
            <GoogleLoginSignupButton />
        </VerticalCenter>
    );
};
