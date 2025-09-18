import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  Container,
  ListItemText,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import Followers_Page from "./Followers_Page";
import { followers_data } from "../../../data/followers";
import Friends_Page from "./Friends_Page";
const StyledTab = styled(Tab)(() => ({
  
  "&.css-iypnj4-MuiButtonBase-root-MuiTab-root.Mui-selected" :{
    color:"black"
  }
}));





export default function Followers() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Container >
        <Box sx={{ height: "170px" }}></Box>
        <Paper elevation={3} sx={{borderRadius: "20px"}}>
          {/* main box */}
          <Box
            sx={{
              backgroundColor: "#0b3c46",
              height: "290px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", opacity: 0.3  }}
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
          
          <Box sx={{width: "100%",borderRadius: "20px"}}>
          <Box
              sx={{
                pl: "24px",
                height: "60px",
                backgroundColor: "#fdfdfdff",
                zIndex: 9,
                display: "flex",
                flexDirection: "row-reverse",
                boxShadow: '0px 1pt 50px -25px #050404ff',
                borderRadius: "20px"
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
                    }
                  },
                }}
              >
                <StyledTab
                  label="Profile"
                  icon={
                    <Icon icon="hugeicons:profile-02" width="24" height="24" />
                  }
                  iconPosition="start"
                />
                <StyledTab
                  label="Followers"
                  icon={<Icon icon="mdi:heart" width="24" height="24" />}
                  iconPosition="start"
                />
                <StyledTab
                  label="Friends"
                  icon={<Icon icon="mdi:people" width="24" height="24" />}
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

      <Container sx={{my:2}}>
      {value==0 && <Typography>Profile Page</Typography>}
      {value==1 && <Followers_Page follower_list={followers_data} />}
      {value==2 && <Friends_Page follower_list={followers_data}/>}
      {value==3 && <Typography>Gallery Page</Typography>}
      </Container>
      </>
  );
}
