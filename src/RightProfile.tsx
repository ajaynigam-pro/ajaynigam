import { Grid, Box,Divider } from "@mui/material";
import React from "react";
import ProfileTabs from "./ProfileTabs";

const RightProfile = () => {
  return (
    <Grid container spacing={2} direction={'column'}>
        <Grid item md={4}>
            <Box sx={{height:'0px'}}></Box>
            <Divider />
        </Grid>
        <Grid item md={8}>
            <ProfileTabs />
        </Grid>
    </Grid>
  );
};

export default RightProfile;
