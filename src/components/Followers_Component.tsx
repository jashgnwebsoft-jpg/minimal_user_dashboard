import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Button,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import type { Follower_type } from "../types/follower_type";

export default function Followers_Component(follower: Follower_type) {
  const [followed, setFollowed] = useState(false);
  const handleSetFollowed = () => {
    setFollowed(!followed);
  };
  return (
    <>
      <Paper
        elevation={1}
        sx={{
          borderRadius: "16px",
          boxShadow: "0px 1pt 50px -40px #050404ff",
        }}
      >
        <Box
          padding={"25px"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={follower.name}
            src={follower.avatar}
            sx={{ width: 50, height: 50, border: "2px solid white" }}
          />
          <ListItemText
            primary={follower.name}
            secondary={
              <>
                <Icon icon="mdi:location" width="20" height="20" />
                <Typography fontSize="15px" variant="caption">
                  {follower.country}
                </Typography>
              </>
            }
            sx={{ pl: 3, color: "black" }}
            secondaryTypographyProps={{
              style: { color: "grey" },
              alignContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
            primaryTypographyProps={{
              fontWeight: "600",
            }}
          />
          {followed && (
            <Button
              variant="outlined"
              startIcon={
                <Icon icon="material-symbols:done" width="24" height="24" />
              }
              onClick={handleSetFollowed}
              sx={{
                height: "30px",
                color: "green",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                },
              }}
            >
              Followed
            </Button>
          )}
          {!followed && (
            <Button
              onClick={handleSetFollowed}
              variant="outlined"
              sx={{
                height: "30px",
                color: "black",
                borderColor: "black",
              }}
            >
              Follow
            </Button>
          )}
        </Box>
      </Paper>
    </>
  );
}
