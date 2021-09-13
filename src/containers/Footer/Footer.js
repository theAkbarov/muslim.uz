import { Wrapper } from "./styles";
import { Container, Flex } from "../../styles";
import Logo from "../../assets/Image/Logo.png";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TweeterIcon,
  YoutubeIcon,
} from "../../assets/Icon";
const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div className="top">
          <div className="left">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <Flex>
              <a href="https://t.me">
                <TelegramIcon />
              </a>
              <a href="https://youtube.com">
                <YoutubeIcon />
              </a>
              <a href="https://facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com">
                <InstagramIcon />
              </a>
              <a href="https://tweeter.com">
                <TweeterIcon />
              </a>
            </Flex>
          </div>
          <div className="right">
            <p>
              © 2016. Ўзбекистон мусулмонлари идораси. Оммавий ахборот
              воситалари вакиллари ҳамда порталимиз мухлислари диққатига! Сиз
              muslim.uz порталидаги маълумотлардан хоҳлаганча фойдаланишингиз
              мумкин. Бизнинг асосий мақсадимиз ҳам шу. Фақат ягона шартимиз:
              Мақола ёки хабарни ўз веб-саҳифангизда ёритишда қуйидаги кўринишда
              беришингизни сўраймиз: “Ўзбекистон мусулмонлари идораси расмий
              веб-портали хабар беради”, бунда “расмий веб-портали” сўзи устига
              линк қўйилиб, линк http//muslim.uz саҳифасига йўналтирилган
              бўлиши, “хабар беради” сўз бирикмасига линк қўйилиб, линк
              “веб-саҳифа”даги сиз фойдаланган хабар ёки мақолага йўналтирилган
              бўлиши шарт. Унутманг, маълумот олинганда манзил ва муаллифни
              кўрсатмаслик ҳам қонунан ҳам диний нуқтаи-назардан қаттиқ
              қораланади.
            </p>
          </div>
        </div>

        <div className="bottom">
          <span>© MUSLIM.UZ 2021</span>
          <p>
            <a href="https://www.proactive-media.com/">PROACTIVE MEDIA </a> 
            da
            ishlab chiqarilgan
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
