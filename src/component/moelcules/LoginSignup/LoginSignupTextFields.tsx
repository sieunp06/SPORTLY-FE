import React from "react";
import { LoginSignUpTextField } from "../../atoms";

export const LoginSignUpTextFields = () => {
    return (
        <div>
            <div>
                <LoginSignUpTextField type="text" placeholder="이메일"></LoginSignUpTextField>
            </div>
            <div>
                <LoginSignUpTextField type="password" placeholder="비밀번호"></LoginSignUpTextField>
            </div>
        </div>
    );
};
