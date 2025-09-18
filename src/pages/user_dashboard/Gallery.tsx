import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const imageUrl: string[] = [
  "src/assets/images/cover-1.webp",
  "src/assets/images/cover-2.webp",
  "src/assets/images/cover-3.webp",
  "src/assets/images/cover-4.webp",
  "src/assets/images/cover-5.webp",
  "src/assets/images/cover-6.webp",
  "src/assets/images/cover-7.webp",
  "src/assets/images/cover-8.webp",
  "src/assets/images/cover-9.webp",
  "src/assets/images/cover-10.webp",
  "src/assets/images/cover-11.webp",
  "src/assets/images/cover-12.webp",
];

export default function Gallery() {
  return (
    <Container>
      <Grid container spacing={3}>
        {imageUrl.map((data, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                width: "100%",
                height: "22rem",
                backgroundSize: "cover",
                backgroundImage: `url(${data})`,
                borderRadius: "1rem",
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
                <IconButton>
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
    </Container>
  );
}
