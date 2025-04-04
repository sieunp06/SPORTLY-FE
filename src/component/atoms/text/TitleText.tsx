import { styled, Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TitleTextProps extends TypographyProps {
    text: string;
}

export const TitleText = ({ text, ...props }: TitleTextProps) => {
    return <StyledTypography {...props}>{text}</StyledTypography>;
};

const StyledTypography = styled(Typography)`
    text-align: center;
    margin: 1rem 0;
    font-weight: bold;
`;
