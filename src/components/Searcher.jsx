import "./searcher.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { getMatchedResults } from "../functions/funcs";

function Searcher(props) {
  const [query, setQuery] = useState("");

  const prepareAndSendInfo = async (searchString) => {
    let result = "";
    for (let i = 0; i < searchString.length; i++) {
      if (searchString[i] === " ") {
        result += "%20";
      } else if (searchString[i] === "ñ") {
        result += "%C3%B1";
      } else {
        result += query[i];
      }
    }
    const response = await getMatchedResults(result);
    props.state(response.data);
  };

  const handleForm = async (e) => {
    e.preventDefault();
    await prepareAndSendInfo(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleForm}>
      <TextField
        id="standard-basic"
        label="Buscador"
        variant="filled"
        autoComplete="off"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputLabelProps={{ color: "secondary" }}
        InputProps={{
          color: "secondary",
        }}
        sx={{
          minWidth: 230,
        }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{
          marginLeft: "0.1rem",
        }}
      >
        <SearchIcon />
      </Button>
    </form>
  );
}

export { Searcher };
