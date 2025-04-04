import { TextField } from "@mui/material";
import React, { useState } from "react";

interface LoginSignUpTextFieldProps {
    type: "text" | "password";
    placeholder: string;
}

export const LoginSignUpTextField = ({ type, placeholder }: LoginSignUpTextFieldProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validate = () => {
        setErrorMessage(validateEmptySpace());
    };

    const validateEmptySpace = () => {
        if (value.trim() === "") {
            setError(true);
            return "필수 입력 항목입니다.";
        }
        setError(false);
        return "";
    };

    return (
        <TextField
            type={type}
            id="standard-basic"
            value={value}
            helperText={errorMessage || " "}
            onChange={(e) => setValue(e.target.value)}
            onBlur={validate}
            variant="standard"
            multiline={false}
            placeholder={placeholder}
        ></TextField>
    );
};
