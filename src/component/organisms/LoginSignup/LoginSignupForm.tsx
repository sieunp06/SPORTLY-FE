import React from "react";
import { LoginSignUpTextFields } from "../../moelcules";
import { LoginSignupButton } from "../../moelcules";

interface LoginSignupFormProps {
    text: string;
}

export const LoginSignupForm = ({ text }: LoginSignupFormProps) => {
    return (
        <div>
            <LoginSignUpTextFields></LoginSignUpTextFields>
            <LoginSignupButton type="submit" text={text}></LoginSignupButton>
        </div>
    );
};
