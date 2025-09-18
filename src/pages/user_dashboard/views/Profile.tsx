import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Container,
  Divider,
  Grid,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import PostComponent from "../../../components/PostComponent";
import { PostData } from "../../../data/post";

export default function Profile() {
  return (
    <Container
      sx={{
        p: {
          xs: 0,
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
        },
      }}
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack spacing={3}>
            {/* --------------------------------------------------Followers---------------------------------------------------------- */}
            <Card sx={{ py: 3, textAlign: "center", typography: "h1" }}>
              <Stack
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderStyle: "dashed" }}
                  />
                }
                sx={{ flexDirection: "row" }}
              >
                <Stack sx={{ width: 1 }}>
                  1,947
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", typography: "body2" }}
                  >
                    Follower
                  </Box>
                </Stack>

                <Stack sx={{ width: 1 }}>
                  9,124
                  <Box
                    component="span"
                    sx={{ color: "text.secondary", typography: "body2" }}
                  >
                    Following
                  </Box>
                </Stack>
              </Stack>
            </Card>
            {/* --------------------------------------------------Followers---------------------------------------------------------- */}
            {/* -----------------------------------------------------About------------------------------------------------------- */}
            <Card>
              <CardHeader title="About" />
              <Stack spacing={2} sx={{ p: 3, typography: "h6" }}>
                <Typography>
                  Tart I love sugar plum I love oat cake. Sweet roll caramels I
                  love jujubes. Topping cake wafer..
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon icon="material-symbols:location-on" width="24" />
                  <Typography>
                    Live at
                    <Link
                      variant="h6"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      &nbsp; United Kingdom
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon icon="material-symbols:mail" width="24" />
                  <Typography>ashlynn.ohara62@gmail.com</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon
                    icon="material-symbols:business-center-rounded"
                    width="24"
                  />
                  <Typography>
                    CTO at
                    <Link
                      variant="h6"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      &nbsp; Gleichner, Mueller and Tromp
                    </Link>
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Icon
                    icon="material-symbols:business-center-rounded"
                    width="24"
                  />
                  <Typography>
                    Studied at
                    <Link
                      variant="h6"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      &nbsp; Nikolaus - Leuschke
                    </Link>
                  </Typography>
                </Box>
              </Stack>
            </Card>
            {/* -----------------------------------------------------About------------------------------------------------------- */}
            {/* -----------------------------------------------------Social------------------------------------------------------- */}
            <Card>
              <CardHeader title="Social" />

              <Stack spacing={2} sx={{ p: 2 }}>
                <Box
                  sx={{
                    gap: 1,
                    display: "flex",
                    typography: "body2",
                    wordBreak: "break-all",
                    alignItems: "center",
                  }}
                >
                  <Icon icon="line-md:facebook" width="24" />
                  <Link color="inherit">https://www.facebook.com/jash</Link>
                </Box>
                <Box
                  sx={{
                    gap: 1,
                    display: "flex",
                    typography: "body2",
                    wordBreak: "break-all",
                    alignItems: "center",
                  }}
                >
                  <Icon icon="line-md:instagram" width="24" />
                  <Link color="inherit">https://www.instagram.com/frankie</Link>
                </Box>
                <Box
                  sx={{
                    gap: 1,
                    display: "flex",
                    typography: "body2",
                    wordBreak: "break-all",
                    alignItems: "center",
                  }}
                >
                  <Icon icon="line-md:linkedin" width="24" />
                  <Link color="inherit">
                    https://www.linkedin.com/in/frankie
                  </Link>
                </Box>
                <Box
                  sx={{
                    gap: 1,
                    display: "flex",
                    typography: "body2",
                    wordBreak: "break-all",
                    alignItems: "center",
                  }}
                >
                  <Icon icon="line-md:twitter-x" width="24" />
                  <Link color="inherit">https://www.twitter.com/frankie</Link>
                </Box>
              </Stack>
            </Card>
            {/* -----------------------------------------------------Social------------------------------------------------------- */}
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          {/* ---------------------------------------------------Post Input------------------------------------------------------------- */}
          <Card sx={{ p: 3 }}>
            <InputBase
              placeholder="Share what your are thinking here..."
              rows={4}
              multiline
              fullWidth
              sx={{
                p: 2,
                mb: 3,
                borderRadius: 1,
                border: `solid 1px #919eab`,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Stack direction="row" gap={1}>
                <Chip
                  avatar={
                    <Icon
                      icon="solar:gallery-wide-bold"
                      width={24}
                      color="#22C55E"
                    />
                  }
                  label="Image / Video"
                />
                <Chip
                  avatar={
                    <Icon
                      icon="solar:videocamera-record-bold"
                      width={24}
                      color="#FF5630"
                    />
                  }
                  label="Streaming"
                />
              </Stack>
              <Button variant="contained" sx={{ backgroundColor: "#1C252E" }}>
                <Typography variant="h6">Post</Typography>
              </Button>
            </Box>
          </Card>
          {/* ---------------------------------------------------Post Input------------------------------------------------------------- */}
          {PostData.map((data, index) => (
            <PostComponent
              key={index}
              userName={data.userName}
              postDate={data.postDate}
              postCaption={data.postCaption}
              comments={data.comments}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
