import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// LOCAL CUSTOM COMPONENTS

import SearchResult from "./components/search-result";
import CategoryDropdown from "./components/category-dropdown";
// LOCAL CUSTOM HOOKS

import useSearch from "./hooks/use-search";
// CUSTOM ICON COMPONENT

import Search from "icons/Search";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchInputWithCategory() {
  const { parentRef, resultList } = useSearch();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const handleFilterChange = (searchValue, categoryValue) => {
    setSearch(searchValue);
    setCategory(categoryValue);

    setTimeout(() => {
      router.push(
        `/articles?page=1&&search=${searchValue}&&category=${categoryValue}`
      );
    }, 3000);
  };

  const INPUT_PROPS = {
    sx: {
      border: 0,
      height: 44,
      padding: 0,
      overflow: "hidden",
      backgroundColor: "grey.200",
      "& .MuiOutlinedInput-notchedOutline": {
        border: 0,
      },
    },
    startAdornment: (
      <Box
        mr={2}
        px={2}
        display="grid"
        alignItems="center"
        justifyContent="center"
        borderRight="1px solid"
        borderColor="grey.400"
      >
        <Search
          sx={{
            fontSize: 17,
            color: "grey.600",
          }}
        />
      </Box>
    ),
    endAdornment: (
      <CategoryDropdown
        title={category}
        handleChange={(value) => handleFilterChange(search, value)}
      />
    ),
  };

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{
        ref: parentRef,
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Searching for..."
        onChange={(e) => handleFilterChange(e.target.value, category)}
        value={search}
        InputProps={INPUT_PROPS}
      />

      {/* SHOW SEARCH RESULT LIST */}
      {resultList.length > 0 ? <SearchResult results={resultList} /> : null}
    </Box>
  );
}
