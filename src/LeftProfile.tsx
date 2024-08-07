import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const LeftProfile = () => {
  return (
    <Box>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="/img/profile.jpg"
                alt="Ajay Nigam"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Box>
  );
};

export default LeftProfile;
