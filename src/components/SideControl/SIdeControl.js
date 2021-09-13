import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Youtube,
} from "../../assets/Icon";
import { Flex } from "../../styles";
import Img from "../../assets/Image/Banner.png";

import {
  Aside,
  Subscription,
  Writer,
  Image,
} from "./style";
import { Ads } from "../../db";

const SIdeControl = () => {
  return (
    <Aside>
      <Subscription>
        <span>OBUNA BO’LING</span>
        <Flex>
          <a href="https://t.me">
            <Telegram />
          </a>
          <a href="https://t.me">
            <Instagram />
          </a>
          <a href="https://t.me">
            <Youtube />
          </a>
          <a href="https://t.me">
            <Twitter />
          </a>
          <a href="https://t.me">
            <Facebook />
          </a>
        </Flex>
      </Subscription>
      <Writer>
        <img src={Img} alt="" />
        <h4>Muxarrir</h4>
        <h3>MUSLIM.UZ</h3>
        <p>Islomiy ma'lumot va ta'lim portali</p>
      </Writer>
      {Ads.map((ad) => (
        <Image key={ad.id}>
          <a href="somewehere.com">
            <img src={ad.img} alt={`place of ${ad.link} web site`} />
          </a>
        </Image>
      ))}
    </Aside>
  );
};

export default SIdeControl;
