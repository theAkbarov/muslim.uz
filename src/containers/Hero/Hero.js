import {
  MainLayout,
  Carousel,
  Article,
  Heading,
  ArticleWrapper,
} from "./styles";
import { CalendarIcon } from "../../assets/Icon";
import { Container } from "../../styles";
import Banner from "../../assets/Image/Banner.png";
import { useEffect, useState } from "react";
import Image from '../../assets/Image/Banner.png'
import axios from "axios";
import { Link } from "react-router-dom";
const Hero = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://api3.islamhouse.com/v3/paV29H2gm56kvLPy/main/articles/uz/uz/1/25/json"
      )
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <MainLayout>
        <Carousel>
          <div
            className="carousel-item"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <div className="content">
              <h3>
                Бир савол сўрасам: Аёлим вафот этди. Менга васият қилган
                қабристонга қўмишга отаси рози бўлмаса нима қилиш керак?
              </h3>
              <span className="category">Maqolalar</span>
              <span>14:25 / 09.02.2021</span>
            </div>
          </div>
        </Carousel>
        <ArticleWrapper>
          <Heading>So‘nggi yangiliklar</Heading>
          {data.length > 0 &&
            data.splice(0, 4).map((article) => (
              <Link key={article.id} to={`/articles/${article.id}`}>
                <Article>
                  <img
                    src={article.image === null ? Image : article.image}
                    alt={article.image}
                  />
                  <div className="content">
                    <h3>{article.title}</h3>
                    <span>
                      <CalendarIcon />
                      {article.add_date}
                    </span>
                  </div>
                </Article>
              </Link>
            ))}
        </ArticleWrapper>
      </MainLayout>
    </Container>
  );
};

export default Hero;
