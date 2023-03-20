import React from "react";
import { useParams } from "react-router-dom";

const Film = () => {
  const params = useParams();

  return <div>Peli con id {params.id}</div>;
};

export { Film };
