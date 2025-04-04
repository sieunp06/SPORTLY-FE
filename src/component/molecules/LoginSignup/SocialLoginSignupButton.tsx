import React from "react";
import { ImageButton } from "../../atoms/button/ImageButton";
import { GOOGLE_IMG, KAKAO_IMG, NAVER_IMG } from "../../../images/SocialLoginButtonImage";

export const KakaoLoginSignupButton = () => {
    const onClick = () => {
        console.log("카카오 클릭");
    };

    return <ImageButton src={KAKAO_IMG} alt="KAKAO_IMG" width="5rem" height="5rem" onClick={onClick}></ImageButton>;
};

export const NaverLoginSignupButton = () => {
    const onClick = () => {
        console.log("네이버 클릭");
    };

    return <ImageButton src={NAVER_IMG} alt="NAVER_IMG" width="5rem" height="5rem" onClick={onClick}></ImageButton>;
};

export const GoogleLoginSignupButton = () => {
    const onClick = () => {
        console.log("구글 클릭");
    };

    return <ImageButton src={GOOGLE_IMG} alt="GOOGLE_IMG" width="5rem" height="5rem" onClick={onClick}></ImageButton>;
};
