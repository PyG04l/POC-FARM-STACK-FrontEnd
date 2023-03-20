import * as React from "react";
import "./porposeList.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { addThatOne } from "../functions/funcs";

function PorposeList(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  const handleClick = async (e) => {
    const fCode = e.target.value.split(".html")[0].split("/");
    const fNCode = fCode[fCode.length - 1];
    const response = await addThatOne(fNCode);
    console.log("TODO BIEN: ", response);
  };

  return (
    <Box
      sx={{
        maxWidth: "80%",
        minWidth: "50%",
        bgcolor: "#00679d",
        borderRadius: "5px",
      }}
      style={{
        marginBottom: "10rem",
      }}
    >
      <Stack
        spacing={3}
        sx={{
          margin: "1rem 0.5rem",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {props.filmList.length ? (
          props.filmList.map((title) => {
            return (
              <Item key={title[2]}>
                <Button
                  variant="contained"
                  onClick={handleClick}
                  value={title[1]}
                >
                  {title[0]} ({title[3]})
                </Button>
              </Item>
            );
          })
        ) : (
          <p
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            No hay resultados de búsqueda
          </p>
        )}
      </Stack>
    </Box>
  );
}

export { PorposeList };
