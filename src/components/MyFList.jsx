import React, { useEffect, useState } from "react";
import { getMyFilmList } from "../functions/funcs";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import "./myList.css";

const MyFList = () => {
  const [filmList, setFilmList] = useState([]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  useEffect(() => {
    getMyFilmList(setFilmList);
  }, []);

  return (
    <section id="myList">
      <Box
        sx={{
          minWidth: "60%",
          bgcolor: "#00679d",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
        }}
        style={{
          marginBottom: "5rem",
          flexFlow: "column wrap",
        }}
      >
        <Stack
          spacing={3}
          sx={{
            margin: "0.5rem 0.5rem",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <section id="">
            {filmList.length ? (
              filmList.map((film) => (
                <Item key={film.id} style={{ margin: "1rem" }}>
                  <p>
                    <b>Título original: </b>
                    {film.title}
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <p>
                      <b>Año: </b>
                      {film.year}
                    </p>
                    <p>
                      <b>Duración: </b>
                      {film.duration}
                    </p>
                    <p>
                      <b>País: </b>
                      {film.country}
                    </p>
                  </div>
                  <p>
                    <b>Género/s: </b>
                    {film.genre}
                  </p>
                  <p>
                    <b>Sinopsis: </b>
                    {film.synopsis}
                  </p>
                </Item>
              ))
            ) : (
              <p
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                No hay peliculas guardadas en tu lista
              </p>
            )}
          </section>
        </Stack>
      </Box>
    </section>
  );
};

export { MyFList };
