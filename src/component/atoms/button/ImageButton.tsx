import Styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

interface imageButtonProps {
    alt: string;
    src: string;
    width?: string;
    height?: string;
    onClick: () => void;
}

export const ImageButton = ({ alt, src, width, height, onClick }: imageButtonProps) => {
    const StyledButton = Styled(Button)`
        width: ${width};
        height: ${height};
    `;

    return (
        <StyledButton>
            <StyledImg alt={alt} src={src} onClick={onClick}></StyledImg>
        </StyledButton>
    );
};

const StyledImg = Styled.img`
    width: 100%;
    height: 100%;
`;
