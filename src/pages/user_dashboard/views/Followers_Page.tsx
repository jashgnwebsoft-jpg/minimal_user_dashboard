import { Box, Grid, Typography } from "@mui/material";
import type { Follower_List_Type } from "../../../types/follower_type";
import Followers_Component from "../../../components/Followers_Component";

export default function Followers_Page(followers: Follower_List_Type) {
  return (
    <>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Followers</Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {followers.follower_list.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Followers_Component {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
