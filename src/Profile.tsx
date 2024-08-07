import { Grid, TextField } from "@mui/material";
import React from "react";
import LeftProfile from "./LeftProfile";
import RightProfile from "./RightProfile";

const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <LeftProfile />
      </Grid>
      <Grid item xs={6} md={8}>
      <RightProfile />
      </Grid>
    </Grid>
  );
};

export default Profile;
