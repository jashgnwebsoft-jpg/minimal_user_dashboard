import { Box, Dialog, Grid, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { imageUrl } from "../../../data/gallery";
import { useState } from "react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState('');
  const handleClose = () => setSelectedImg('');
  return (
    <>
      <Typography variant="h5" mb={3}>
        Gallery
      </Typography>
      <Grid container spacing={3}>
        {imageUrl.map((data, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                width: "100%",
                height: "22rem",
                backgroundSize: "cover",
                backgroundImage: `url(${data})`,
                borderRadius: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "end",
                }}
              >
                <IconButton
                  onClick={() => {
                      setSelectedImg(data);
                    }}
                >
                  <Icon icon="eva:more-vertical-fill" color="white" />
                </IconButton>
              </Box>
              <Box sx={{ p: 2 }}>
                <Typography color="white" variant="h5">
                  The Future of Renewable Energy: Innovation
                </Typography>
                <Typography
                  variant="body1"
                  color="#FFFFFF"
                  sx={{ opacity: 0.48 }}
                >
                  18 Sep 2025
                </Typography>
              </Box>
              <Dialog
              onClose={handleClose}
              open={data === selectedImg}
            >
              <img
                src={data}
                loading="lazy"
              />
            </Dialog>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
