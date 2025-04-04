import { Button } from "@mui/material";
import React from "react";

interface TextButtonProp {
    text: string;
    onClick?: () => void;
}

export const TextButton = ({ text, onClick }: TextButtonProp) => {
    return (
        <Button variant="text" onClick={onClick}>
            {text}
        </Button>
    );
};
