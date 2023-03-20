import { Searcher } from "../components/Searcher";
import { PorposeList } from "../components/PorposeList";
import { useState } from "react";

function Index() {
  const [data, setData] = useState([]);
  const getData = (data) => {
    setData(data);
  };

  return (
    <section className="indPage">
      <Searcher state={getData} />
      <PorposeList filmList={data} />
    </section>
  );
}

export { Index };
