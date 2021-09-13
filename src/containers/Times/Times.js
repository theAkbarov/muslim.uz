import { Wrapper } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

const Times = () => {
  const [times, setTimes] = useState([]);
   useEffect(() => {
         axios
           .get("https://api.pray.zone/v2/times/today.json?city=tashkent")
           .then((res) => setTimes(res.data.results.datetime[0].times))
           .catch((err) => console.log(err));
   }, [])
  return (
    <Wrapper>
      {times ? (
        <>
          <div className="times">
            <span className="name">Bomdod</span>
            <span className="current">{times.Imsak}</span>
          </div>
          <div className="times">
            <span className="name">Quyosh</span>
            <span className="current">{times.Sunrise}</span>
          </div>
          <div className="times">
            <span className="name">Peshin</span>
            <span className="current">{times.Dhuhr}</span>
          </div>
          <div className="times">
            <span className="name">Asr</span>
            <span className="current">{times.Asr}</span>
          </div>
          <div className="times">
            <span className="name">Shom</span>
            <span className="current">{times.Maghrib}</span>
          </div>
          <div className="times">
            <span className="name">Hufton</span>
            <span className="current">{times.Isha}</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Times;
