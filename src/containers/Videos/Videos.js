import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Videos = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/videos/uz/uz/1/25/json"
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data)
  return (
    <div>
      <>{data.length > 0 && data.slice(0,6).map((el) => <Card key={el.id} data={el} />)}</>
    </div>
  );
};

export default Videos;
