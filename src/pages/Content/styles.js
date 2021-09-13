import styled from "styled-components";

export const Wrapper = styled.div``;
export const Related = styled.div``;
export const Header = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  padding: 20px 24px;
  background: #ffffff;
  border-radius: 8px;
  letter-spacing: 0.01em;
  color: #333333;
`;
export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    display: inline-block;
    display: flex;
    align-items: center;
    letter-spacing: 0.01em;
    color: #cacaca;
    margin-right: 20px;

    svg {
      margin-right: 5px;
    }
  }
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 32px;
  margin: 0;
  letter-spacing: 0.01em;
  margin: 16px 0 12px;
  color: #333333;
`;
export const Breadcrum = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #c6c6c6;
  a {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #c6c6c6;
  }
`;
export const Section = styled.section`
  width: 75%;
  .banner {
    object-fit: cover;
    margin-bottom: 24px;
    border-radius: 8px;
  }
`;
