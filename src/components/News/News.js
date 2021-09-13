import { Section, Wrapper, Nav } from "./style";
import { NestedLinks } from "../../db";
import { Container } from "../../styles";
import Card from "../Card";
import { useEffect, useState } from "react";

import SIdeControl from "../SideControl/SIdeControl";
import axios from "axios";
import Fatwa from "../../containers/Fatwa";
import New from "../../containers/News";
import Videos from "../../containers/Videos/Videos";
import Audio from "../../containers/Audio";
import Books from "../../containers/Books/Books";
const News = () => {
  const [active, setActive] = useState("Yangiliklar");

  return (
    <Wrapper>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Section>
          <Nav>
            {NestedLinks.map((link) => (
              <button
                onClick={(e) => setActive(e.target.textContent)}
                className={active === link.title ? "active" : ""}
                key={link.path}
                to={link.path}
              >
                {link.icon}
                {link.title}
              </button>
            ))}
          </Nav>
          {active === "Fatvo" ? (
            <Fatwa />
          ) : active === "Yangiliklar" ? (
            <New />
          ) : active === "VIDEOLAR" ? (
            <Videos />
          ) : active === "AUDIOLAR" ? (
            <Audio />
          ) : active === "KITOBLAR" ? (
            <Books />
          ) : null}
        </Section>
        <SIdeControl />
      </Container>
    </Wrapper>
  );
};

export default News;
