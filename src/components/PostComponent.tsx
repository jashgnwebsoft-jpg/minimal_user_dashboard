import {
  CardHeader,
  Avatar,
  Link,
  Box,
  IconButton,
  AvatarGroup,
  Card,
  Checkbox,
  FormControlLabel,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";

type commnetType = {
  commentDate: string;
  commentUserName: string;
  commnetImage: string;
  comment: string;
};

type cardImage = {
  path: string;
};

const data: commnetType[] = [
  {
    commentDate: "15 Sep 2025",
    commentUserName: "Lainey Davidson",
    commnetImage: "src/assets/images/avatar-2.webp",
    comment: "Praesent venenatis metus at",
  },
  {
    commentDate: "14 Sep 2025",
    commentUserName: "Cristopher Cardenas",
    commnetImage: "src/assets/images/avatar-4.webp",
    comment:
      "Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed lectus.",
  },
];

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

const CardImage = (props: cardImage) => {
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

const CardComment = (commnetData: commnetType[]) => {
  return (
    <>
      {commnetData.map((data) => {
        return (
          <Box sx={{ gap: 2, display: "flex" }}>
            <Avatar alt={data.commentUserName} src={data.commnetImage} />

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
                <Box sx={{ typography: "h6" }}>{data.commentUserName}</Box>

                <Box sx={{ typography: "caption", color: "#919EAB" }}>
                  {data.commentDate}
                </Box>
              </Box>

              <Box sx={{ typography: "body2", color: "#637381" }}>
                {data.comment}
              </Box>
            </Paper>
          </Box>
        );
      })}
    </>
  );
};

const CardInputBox = () => {
  return (
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
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <Icon icon="ic:round-image-search" width="24" height="24" />
        </IconButton>
        <IconButton sx={{ p: "10px" }} aria-label="directions">
          <Icon icon="ic:round-emoji-emotions" width="24" height="24" />
        </IconButton>
      </Box>
    </Box>
  );
};

const PostComponent = () => {
  return (
    <Card sx={{ my: 3 }}>
      <CustomHeader />
      <Typography variant="body2" m={2}>
        The sun slowly set over the horizon, painting the sky in vibrant hues of
        orange and pink.
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
            <Avatar alt="Remy Sharp" src="src/assets/images/avatar-3.webp" />
            <Avatar alt="Travis Howard" src="src/assets/images/avatar-4.webp" />
            <Avatar alt="Cindy Baker" src="src/assets/images/avatar-5.webp" />
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
        {CardComment(data)}
      </Stack>
      <Stack spacing={1.5} sx={{ px: 3, pb: 2, my: 3 }}>
        <CardInputBox />
      </Stack>
    </Card>
  );
};

export default PostComponent;
