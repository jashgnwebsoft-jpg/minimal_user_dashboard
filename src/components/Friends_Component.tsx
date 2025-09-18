import { Icon } from "@iconify/react";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import Menu_Component from "./Menu_Component";
import type { Follower_type } from "../types/follower_type";

export default function Friends_Component(follower: Follower_type) {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          borderRadius: "16px",
          alignItems: "center",
          justifyContent: "center",
          pt: 1,
          pb: 7,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Menu_Component />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          <Avatar
            alt={follower.name}
            src={follower.avatar}
            sx={{ width: 60, height: 60, border: "2px solid white" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              {follower.name}
            </Typography>
            <Typography variant="caption" color="grey">
              {follower.job_role}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Grid container spacing={3}>
              <Icon icon="devicon:facebook" width="24" height="24" />
              <Icon icon="skill-icons:instagram" width="24" height="24" />
              <Icon icon="devicon:linkedin" width="24" height="24" />
              <Icon icon="ri:twitter-x-fill" width="24" height="24" />
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
