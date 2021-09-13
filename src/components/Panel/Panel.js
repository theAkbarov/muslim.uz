import { VolumeIcon, GlassesIcon, SearchIcon } from "../../assets/Icon";
import {
  PanelWrapper,
  Button,
  Time,
  Date,
  IslamicDate,
  FormControl,
  Select,
} from "./styles";
import { Container } from "../../styles";
import { useEffect, useState } from "react";
import axios from "axios";
const Panel = () => {
  const [data, setData] = useState({})
   useEffect(() => {
         axios
           .get("https://api.pray.zone/v2/times/today.json?city=tashkent")
           .then((res) => setData(res.data.results.datetime[0].date))
           .catch((err) => console.log(err));
   }, [])
  return (
    <div>
      <PanelWrapper>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="right">
            <Button>
              <VolumeIcon />
            </Button>
            <Time>Azongacha 01:41:33 qoldi</Time>
            <Date>{data.gregorian}</Date>
            <IslamicDate>{data.hijri}</IslamicDate>
          </div>
          <div className="left">
            <Button className="speacial">
              <GlassesIcon />
              <span className="text">Mahsus imkoniyatlar</span>
            </Button>
            <FormControl>
              <input type="search" />
              <Button>
                <SearchIcon />
              </Button>
            </FormControl>
            <Select>
              <select>
                Tilni tanlang
                <option value="O‘zbek tili (lotin)">O‘zbek tili (lotin)</option>
                <option value="O‘zbek tili (lotin)">
                  O‘zbek tili (kirill)
                </option>
                <option value="O‘zbek tili (lotin)">Russkiy</option>
              </select>
            </Select>
          </div>
        </Container>
      </PanelWrapper>
    </div>
  );
};

export default Panel;
