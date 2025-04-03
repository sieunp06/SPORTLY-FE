import { Typography } from "@mui/material";
import React from "react";
import { LoginSignUpTextFields } from "../../moelcules";
import { VerticalCenter } from "../../../style/VerticalCenter";
import { LoginSignupButton } from "../../moelcules";

export const LoginSignupForm = () => {
    return (
        <div>
            <LoginSignUpTextFields></LoginSignUpTextFields>
            <LoginSignupButton type="submit" text="로그인"></LoginSignupButton>
        </div>
    );
};
