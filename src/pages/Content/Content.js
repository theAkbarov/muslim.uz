import React from "react";
import { Link } from "react-router-dom";
import { CalendarIcon, EyeIcon } from "../../assets/Icon";
import Reminder from "../../components/Reminder/Reminder";
import SIdeControl from "../../components/SideControl/SIdeControl";
import { Container } from "../../styles";
import Image from "../../assets/Image/Banner.png";
import {
  Wrapper,
  Section,
  Breadcrum,
  Heading,
  Group,
  Related,
  Header,
} from "./styles";
import { StaticData } from "../../db";
import Card from "../../components/Card";
const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Reminder />
      </Container>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Section>
          <Breadcrum>
            <Link to="/"> Bosh sahifa</Link> /Maqolalar / Islom kalendari /
            Arafa kuni haqida post
          </Breadcrum>
          <Heading>Arafa kuni haqida post</Heading>
          <Group>
            <span>
              <EyeIcon />
              568
            </span>
            <span>
              <CalendarIcon />
              23.07.2002
            </span>
          </Group>
          <img className="banner" src={Image} alt="" />
          <Header>BOSHQA MAQOLALAR</Header>
          <Related>
            {StaticData.slice(0, 3).map((data) => (
              <Card key={data.seen} data={data} />
            ))}
          </Related>
        </Section>
        <SIdeControl />
      </Container>
    </Wrapper>
  );
};

export default Content;
