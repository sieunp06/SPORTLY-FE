import { TextField } from "@mui/material";
import React, { useState } from "react";

interface LoginSignUpTextFieldProps {
    type: "text" | "password";
    text: string;
}

export const LoginSignUpTextField = ({ type, text }: LoginSignUpTextFieldProps) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const validate = () => {
        return validateEmptySpace();
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
            error
            type={type}
            id="standard-basic"
            label={text}
            value={value}
            helperText={error ? validate() : ""}
            onChange={(e) => setValue(e.target.value)}
            onBlur={validate}
            variant="standard"
            multiline={false}
        ></TextField>
    );
};
