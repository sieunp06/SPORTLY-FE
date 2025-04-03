import { Button } from "@mui/material";
import React from "react";

interface FormButtonProps {
    type: "submit";
    text: string;
    className?: string;
}

export const FormButton = ({ type, text, className }: FormButtonProps) => {
    return (
        <div>
            <Button type={type} className={className}>
                {text}
            </Button>
        </div>
    );
};
