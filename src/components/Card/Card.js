import { Link } from "react-router-dom";
import { CalendarIcon, EyeIcon } from "../../assets/Icon";
import {
  Author,
  Description,
  Footer,
  Heading,
  Label,
  Type,
  Wrapper,
} from "./style";
import Sample from "../../assets/Image/Banner.png";

const Card = ({ data }) => {
  const {
    title,
    importance_level,
    description,
    type,
    id,
    image,
    prepared_by,
    add_date,
  } = data;

    function getDateTimeFromTimestamp(unixTimeStamp) {
    let date = new Date(unixTimeStamp);
    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
}


  return (
    <Link style={{ textDecoration: "none" }} to={`/article/${id}`}>
      <Wrapper>
        <img src={image !== null ? image : Sample} alt={title} />
        <div className="content">
          <Label>{importance_level}</Label>
          <Type>{type}</Type>
          <Heading>{title}</Heading>
          <Author>{prepared_by[0].title}</Author>
          <Description>{description}</Description>
          <Footer>
            <span>
              <EyeIcon />
              {add_date}
            </span>
            <span>
              <CalendarIcon />
              {getDateTimeFromTimestamp(add_date)}
            </span>
          </Footer>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Card;
