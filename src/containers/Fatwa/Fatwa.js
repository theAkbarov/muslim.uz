import axios from "axios";
import { useState } from "react";
import Card from "../../components/Card";

const Fatwa = () => {
    const [data, setData] = useState({})
  axios
    .get(
      "https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/fatwa/uz/uz/1/25/json"
    )
    .then((res) => setData(res.data.data))
    .catch((err) => console.log(err));
  return (
    <>
      {data.length > 0 &&
        data.slice(0, 6).map((el) => <Card key={el.id} data={el} />)}
    </>
  );
};

export default Fatwa;
