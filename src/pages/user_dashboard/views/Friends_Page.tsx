import {
  Box,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Friends_Component from "../../../components/Friends_Component";
import type {
  Follower_List_Type,
  Follower_type,
} from "../../../types/follower_type";
import { Search } from "@mui/icons-material";
import { useState } from "react";

export default function Friends_Page(followers: Follower_List_Type) {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchData, setSearchData] = useState<Follower_type[]>(
    followers.follower_list
  );
  let filteredList: Follower_type[] = followers.follower_list;
  const filterData = (query: string, data: Follower_type[]) => {
    if (!query) {
      return data;
    }
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    filteredList = filterData(event.target.value, followers.follower_list);
    setSearchData(filteredList);
  };

  return (
    <>
      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Friends</Typography>
        <TextField
          id="outlined-basic"
          placeholder="Search Friends..."
          variant="outlined"
          value={inputValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event)
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {searchData.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 4 }}>
            <Friends_Component {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
