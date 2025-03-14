import React from "react";
import { LoginSignUpTextField } from "../../atoms";

export const LoginSignUpTextFields = () => {
    return (
        <div>
            <LoginSignUpTextField type="text" text="id"></LoginSignUpTextField>
            <LoginSignUpTextField type="password" text="password"></LoginSignUpTextField>
        </div>
    );
};
