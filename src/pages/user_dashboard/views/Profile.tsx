import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  InputBase,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import PostComponent from "../../../components/PostComponent";




const CustomHeader = () => {
  return (
    <CardHeader
      disableTypography
      avatar={<Avatar src="src/assets/images/avatar-25.webp">J</Avatar>}
      title={
        <Link color="inherit" variant="h5" sx={{ textDecoration: "none" }}>
          Jash Tank
        </Link>
      }
      subheader={
        <Box
          sx={{
            color: "text.disabled",
            typography: "caption",
            mt: 0.5,
          }}
        >
          17 Sep 2025
        </Box>
      }
      action={
        <IconButton>
          <Icon icon="eva:more-vertical-fill" />
        </IconButton>
      }
    />
  );
};

type Props = {
  path: string;
};

const CardImage = (props: Props) => {
  const { path } = props;
  return (
    <Box
      sx={{
        display: "flex",
        direction: "row",
        justifyContent: "center",
        aspectRatio: "16/9",
        p: "0.5rem",
      }}
    >
      <img src={path} width="100%" style={{ borderRadius: "1rem" }} />
    </Box>
  );
};

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
                    Tart I love sugar plum I love oat cake. Sweet roll caramels
                    I love jujubes. Topping cake wafer..
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
                    <Link color="inherit">
                      https://www.instagram.com/frankie
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
                    <Icon icon="line-md:linkedin" width="24" />
                    <Link color="inherit">
                      https://www.linkedin.com/in/frankie{" "}
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
            {/* ---------------------------------------------------Post First------------------------------------------------------------- */}
            {/* <Card sx={{ my: 3 }}>
              <CustomHeader />
              <Typography variant="body2" m={2}>
                The sun slowly set over the horizon, painting the sky in vibrant
                hues of orange and pink.
              </Typography>
              <CardImage path="src/assets/images/travel-2.webp" />
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: 2,
                  px: 2,
                }}
              >
                <Stack direction="row" gap={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="error"
                        icon={<Icon icon="solar:heart-bold" />}
                        checkedIcon={<Icon icon="solar:heart-bold" />}
                      />
                    }
                    label={20}
                    sx={{ mr: 1 }}
                  />
                  <AvatarGroup total={20}>
                    <Avatar
                      alt="Remy Sharp"
                      src="src/assets/images/avatar-3.webp"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="src/assets/images/avatar-4.webp"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="src/assets/images/avatar-5.webp"
                    />
                  </AvatarGroup>
                </Stack>
                <Stack direction="row" gap={1}>
                  <IconButton>
                    <Icon icon="solar:chat-round-dots-bold" />
                  </IconButton>

                  <IconButton>
                    <Icon icon="solar:share-bold" />
                  </IconButton>
                </Stack>
              </Box>
              <Stack spacing={1.5} sx={{ px: 3, pb: 2, my: 3 }}>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-2.webp" />

                  <Paper
                    sx={{
                      p: 1.5,
                      flexGrow: 1,
                      bgcolor: "#F4F6F8",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 0.5,
                        display: "flex",
                        alignItems: { sm: "center" },
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Box sx={{ typography: "h6" }}>Lainey Davidson</Box>

                      <Box sx={{ typography: "caption", color: "#919EAB" }}>
                        15 Sep 2025
                      </Box>
                    </Box>

                    <Box sx={{ typography: "body2", color: "#637381" }}>
                      Praesent venenatis metus at
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-4.webp" />

                  <Paper
                    sx={{
                      p: 1.5,
                      flexGrow: 1,
                      bgcolor: "#F4F6F8",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 0.5,
                        display: "flex",
                        alignItems: { sm: "center" },
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Typography variant="h6">Cristopher Cardenas</Typography>

                      <Box sx={{ typography: "caption", color: "#919EAB" }}>
                        14 Sep 2025
                      </Box>
                    </Box>

                    <Box sx={{ typography: "body2", color: "#637381" }}>
                      Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor,
                      tincidunt et, tincidunt eget, semper nec, quam. Sed
                      lectus.
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-4.webp" />

                  <Box
                    border="1px solid #919EAB52"
                    borderRadius={2}
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      fullWidth
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <Icon
                        icon="ic:round-image-search"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                    <IconButton sx={{ p: "10px" }} aria-label="directions">
                      <Icon
                        icon="ic:round-emoji-emotions"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            </Card> */}
            <PostComponent />
            {/* ---------------------------------------------------Post First------------------------------------------------------------- */}
            {/* ---------------------------------------------------Post Second------------------------------------------------------------- */}
            <Card sx={{ my: 3 }}>
              <CustomHeader />
              <Typography variant="body2" m={2}>
                She eagerly opened the gift, her eyes sparkling with excitement.
              </Typography>
              <CardImage path="src/assets/images/travel-3.webp" />
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: 2,
                  px: 2,
                }}
              >
                <Stack direction="row" gap={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="error"
                        icon={<Icon icon="solar:heart-bold" />}
                        checkedIcon={<Icon icon="solar:heart-bold" />}
                      />
                    }
                    label={20}
                    sx={{ mr: 1 }}
                  />
                  <AvatarGroup total={20}>
                    <Avatar
                      alt="Remy Sharp"
                      src="src/assets/images/avatar-3.webp"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="src/assets/images/avatar-4.webp"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="src/assets/images/avatar-5.webp"
                    />
                  </AvatarGroup>
                </Stack>
                <Stack direction="row" gap={1}>
                  <IconButton>
                    <Icon icon="solar:chat-round-dots-bold" />
                  </IconButton>

                  <IconButton>
                    <Icon icon="solar:share-bold" />
                  </IconButton>
                </Stack>
              </Box>
              <Stack spacing={1.5} sx={{ px: 3, pb: 2, my: 3 }}>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-2.webp" />

                  <Paper
                    sx={{
                      p: 1.5,
                      flexGrow: 1,
                      bgcolor: "#F4F6F8",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 0.5,
                        display: "flex",
                        alignItems: { sm: "center" },
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Box sx={{ typography: "h6" }}>Lainey Davidson</Box>

                      <Box sx={{ typography: "caption", color: "#919EAB" }}>
                        15 Sep 2025
                      </Box>
                    </Box>

                    <Box sx={{ typography: "body2", color: "#637381" }}>
                      Praesent venenatis metus at
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-4.webp" />

                  <Paper
                    sx={{
                      p: 1.5,
                      flexGrow: 1,
                      bgcolor: "#F4F6F8",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 0.5,
                        display: "flex",
                        alignItems: { sm: "center" },
                        justifyContent: "space-between",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Typography variant="h6">Cristopher Cardenas</Typography>

                      <Box sx={{ typography: "caption", color: "#919EAB" }}>
                        14 Sep 2025
                      </Box>
                    </Box>

                    <Box sx={{ typography: "body2", color: "#637381" }}>
                      Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor,
                      tincidunt et, tincidunt eget, semper nec, quam. Sed
                      lectus.
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-4.webp" />

                  <Box
                    border="1px solid #919EAB52"
                    borderRadius={2}
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      fullWidth
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <Icon
                        icon="ic:round-image-search"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                    <IconButton sx={{ p: "10px" }} aria-label="directions">
                      <Icon
                        icon="ic:round-emoji-emotions"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            </Card>
            {/* ---------------------------------------------------Post Second------------------------------------------------------------- */}
            {/* ---------------------------------------------------Post Third------------------------------------------------------------- */}
            <Card sx={{ my: 3 }}>
              <CustomHeader />
              <Typography variant="body2" m={2}>
                The old oak tree stood tall and majestic, its branches swaying
                gently in the breeze.
              </Typography>
              <CardImage path="src/assets/images/travel-4.webp" />
              <Box
                sx={{
                  display: "flex",
                  direction: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: 2,
                  px: 2,
                }}
              >
                <Stack direction="row" gap={1}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        color="error"
                        icon={<Icon icon="solar:heart-bold" />}
                        checkedIcon={<Icon icon="solar:heart-bold" />}
                      />
                    }
                    label={20}
                    sx={{ mr: 1 }}
                  />
                  <AvatarGroup total={20}>
                    <Avatar
                      alt="Remy Sharp"
                      src="src/assets/images/avatar-3.webp"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="src/assets/images/avatar-4.webp"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="src/assets/images/avatar-5.webp"
                    />
                  </AvatarGroup>
                </Stack>
                <Stack direction="row" gap={1}>
                  <IconButton>
                    <Icon icon="solar:chat-round-dots-bold" />
                  </IconButton>

                  <IconButton>
                    <Icon icon="solar:share-bold" />
                  </IconButton>
                </Stack>
              </Box>
              <Stack spacing={1.5} sx={{ px: 3, pb: 2, my: 3 }}>
                <Box sx={{ gap: 2, display: "flex" }}>
                  <Avatar alt="Jash" src="src/assets/images/avatar-4.webp" />

                  <Box
                    border="1px solid #919EAB52"
                    borderRadius={2}
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      fullWidth
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search Google Maps"
                      inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <Icon
                        icon="ic:round-image-search"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                    <IconButton sx={{ p: "10px" }} aria-label="directions">
                      <Icon
                        icon="ic:round-emoji-emotions"
                        width="24"
                        height="24"
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Stack>
            </Card>
            {/* ---------------------------------------------------Post Third------------------------------------------------------------- */}
          </Grid>
        </Grid>
      
    </Container>
  );
}
