import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import BottomMenu from "./BottomMenu";

const LeftProfile = () => {
  return (
    <Box>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                image="/ajaynigam/img/profile.jpg"
                alt="Ajay Nigam"
                sx={{height:'100%'}}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ajay Nigam
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Experienced full-stack web developer skilled in React and PHP, capable of building robust and responsive web applications. Proficient in front-end development with React, as well as back-end development using PHP and related frameworks.
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Box>
            <BottomMenu />
        </Box>
    </Box>
  );
};

export default LeftProfile;
