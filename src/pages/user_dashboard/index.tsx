import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Breadcrumbs,
  Container,
  Link,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Profile from "./views/Profile";
import Followers_Page from "./views/Followers_Page";
import Friends_Page from "./views/Friends_Page";
import Gallery from "./views/Gallery";
import { followers_data } from "../../data/followers";

const StyledTab = styled(Tab)(() => ({
  "&.css-iypnj4-MuiButtonBase-root-MuiTab-root.Mui-selected": {
    color: "black",
  },
}));

const BreadcrumbsSeparator = styled("span")(() => ({
  width: 4,
  height: 4,
  borderRadius: "50%",
  backgroundColor: "#919EAB",
}));

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const breadcrumbs = [
  <Link
    underline="hover"
    key="1"
    color="#1C252E"
    href="/"
    onClick={handleClick}
    fontSize="14px"
    fontWeight="400"
  >
    Dashboard
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="#1C252E"
    href="/material-ui/getting-started/installation/"
    onClick={handleClick}
    fontSize="14px"
    fontWeight="400"
  >
    User
  </Link>,
  <Typography key="3" sx={{ color: "#637381 " }} variant="body1">
    Jash Tank
  </Typography>,
];

export default function UserDashboard() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingY: "1rem",
          }}
        >
          <Typography variant="h1">Dashboard</Typography>
          <Breadcrumbs
            separator={<BreadcrumbsSeparator />}
            aria-label="user-dashboard"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Box>
        <Paper elevation={3} sx={{ borderRadius: 5 }}>
          <Box
            sx={{
              backgroundColor: "#0b3c46",
              height: "290px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", opacity: 0.3 }}
              src="src/assets/images/card-bg-image.webp"
            />
            <Box
              sx={{
                zIndex: 10,
                position: "relative",
                top: -100,
                left: "24px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/images/mock/avatar/avatar-25.webp"
                sx={{ width: 128, height: 128, border: "2px solid white" }}
              />
              <ListItemText
                primary="Jaydon Frankie"
                secondary="CTO"
                sx={{ pl: 3, color: "white", fontSize: "25px" }}
                secondaryTypographyProps={{
                  style: { color: "grey" },
                  fontSize: "15px",
                }}
                primaryTypographyProps={{
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              />
            </Box>
          </Box>

          <Box sx={{ width: "100%", borderRadius: "20px" }}>
            <Box
              sx={{
                zIndex: 9,
                display: "flex",
                flexDirection: { xs: "column", md: "row-reverse" },
                borderRadius: "20px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: "black",
                    ".MuiTab-root .Mui-selected": {
                      color: "#0c0c0cff",
                    },
                    "& MuiButtonBase-root-MuiTab-root.Mui-selected ": {
                      color: "#0c0c0cff",
                    },
                  },
                }}
              >
                <StyledTab
                  label="Profile"
                  icon={<Icon icon="hugeicons:profile-02" width="24" />}
                  iconPosition="start"
                />
                <StyledTab
                  label="Followers"
                  icon={<Icon icon="mdi:heart" width="24" />}
                  iconPosition="start"
                />
                <StyledTab
                  label="Friends"
                  icon={<Icon icon="mdi:people" width="24" />}
                  iconPosition="start"
                />
                <StyledTab
                  label="Gallery"
                  icon={
                    <Icon
                      icon="solar:gallery-wide-linear"
                      width="24"
                      height="24"
                    />
                  }
                  iconPosition="start"
                />
              </Tabs>
            </Box>
          </Box>
        </Paper>
      </Container>

      <Container sx={{ my: 2 }}>
        {value == 0 && <Profile />}
        {value == 1 && <Followers_Page follower_list={followers_data} />}
        {value == 2 && <Friends_Page follower_list={followers_data} />}
        {value == 3 && <Gallery />}
      </Container>
    </>
  );
}
