import { Grid, TextField } from "@mui/material";
import React from "react";
import ProfileTabs from "./ProfileTabs";

const RightProfile = () => {
  return (
    <Grid container spacing={2}>
      <ProfileTabs />
    </Grid>
  );
};

export default RightProfile;
