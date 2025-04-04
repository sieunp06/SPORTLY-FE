import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

export const LeagueSelectorCarousel = () => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" gap={2} my={2}>
            <IconButton>{/* <ChevronLeftIcon /> */}</IconButton>
            <Typography variant="h6" fontWeight="medium">
                KBO
            </Typography>
            <IconButton>{/* <ChevronRightIcon /> */}</IconButton>
        </Box>
    );
};
