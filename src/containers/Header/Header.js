import { Link } from "react-router-dom";
import Panel from "../../components/Panel/Panel";
import { Wrapper, Main, Navbar, ButtonGroup } from "./styles";
import Times from "../Times";
import IslamicWord from "../../assets/Image/islamic-word.png";
import Logo from "../../assets/Image/Logo.png";
import { Container } from "../../styles";
import { AppbarLinks } from "../../db";
import { PlayIcon, TvIcon } from "../../assets/Icon";
const Header = () => {

  return (
    <Wrapper>
      <Panel />
      <Container>
        <Main>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/">
              <img src={Logo} alt="Site logo" />
            </Link>
            <Times />
          </div>
          <img src={IslamicWord} alt="" />
        </Main>
      </Container>
      <Navbar>
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <nav>
            {AppbarLinks.map((link) => (
              <Link to={link.path} key={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
          <ButtonGroup>
            <button>
              <PlayIcon />
              Radio
            </button>
            <button>
              <TvIcon />
              TV
            </button>
          </ButtonGroup>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Header;
