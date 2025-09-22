import { Box, Grid, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { imageUrl } from "../../../data/gallery";
import { useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

export default function Gallery() {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const fullscreenRef = useRef(null);

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
                aspectRatio: "1/1",
                backgroundSize: "cover",
                backgroundImage: `url(${data.src})`,
                borderRadius: 5,
                display: "flex",
                overlay: "inherit",
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
                    setOpen(true);
                    setIndex(index);
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
            </Box>
          </Grid>
        ))}
      </Grid>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imageUrl}
        index={index}
        plugins={[Fullscreen]}
        fullscreen={{ ref: fullscreenRef }}
        on={{
          click: () => fullscreenRef.current,
        }}
      />
    </>
  );
}
