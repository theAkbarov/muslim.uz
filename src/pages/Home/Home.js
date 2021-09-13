import Hero from "../../containers/Hero";
import { Wrapper } from "./styles";
import { Container } from "../../styles";
import News from "../../components/News/News";
import Reminder from "../../components/Reminder/Reminder";
const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <Container>
       <Reminder />
      </Container>
      <News />
    </Wrapper>
  );
};

export default Home;
