import Typography from "@mui/material/Typography";
import React from 'react';

const SectionTitle = ({title, uppercase, sx}) => {

    return (
        <Typography
            gutterBottom
            component="h3"
            sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: {
                    xs: 26,
                    md: 30
                },
                textTransform: uppercase ? "uppercase" : "none",
                ...sx
            }}>
            {title}
        </Typography>
    )
};
export default SectionTitle;