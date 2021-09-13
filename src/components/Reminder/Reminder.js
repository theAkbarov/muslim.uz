import styled from "styled-components";
import Img from "../../assets/Image/image 2.png";

const Reminder = () => {
    return (
      <Remindera>
        <img src={Img} alt="" />
        <img src={Img} alt="" />
        <img src={Img} alt="" />
        <img src={Img} alt="" />
      </Remindera>
    );
}
export const Remindera = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 40px;
  background: #ffffff;
  border-radius: 16px;
  margin: 16px 0 24px;
  img {
  }
`;

export default Reminder
