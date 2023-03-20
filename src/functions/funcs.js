import axios from "axios";

const getMyFilmList = async (state) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_ROUTE}films`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
      responseType: "json",
    }
  );
  state(response.data);
};

const getMatchedResults = async (query) => {
  const url = `${process.env.REACT_APP_BACKEND_ROUTE}filmSearch/${query}`;
  const response = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
  return response;
};

const addThatOne = async (url) => {
  const endUrl = `${process.env.REACT_APP_BACKEND_ROUTE}filmScrap/${url}`;
  const filmInfo = await axios.get(endUrl, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
  const jsonFilm = JSON.stringify(filmInfo.data);
  console.log(jsonFilm);

  const response = await axios.post(
    `${process.env.REACT_APP_BACKEND_ROUTE}addFilm`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
      body: filmInfo.data,
    }
  );

  return response.data;
};

export { getMyFilmList, getMatchedResults, addThatOne };
