import React from "react";
import { LoginSignUpTextFields } from "../../molecules";
import { LoginSignupButton } from "../../molecules";

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
