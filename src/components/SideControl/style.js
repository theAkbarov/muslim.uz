import styled from "styled-components";
export const Aside = styled.aside`
  width: 23%;
`;
export const Subscription = styled.div`
  padding: 16px;
  background: #ffffff;
  margin-bottom: 16px;
  border-radius: 8px;
  span {
    font-style: normal;
    font-weight: 600;
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 22px;
    color: #62696d;
  }
  a {
    width: 33px;
    height: 33px;
    svg {
      width: 100%;
    }
  }
`;
export const Writer = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
  img {
    margin-bottom: 8px;
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    font-style: normal;
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    color: #21a3f9;
  }
  h4 {
    font-style: normal;
    margin: 0;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 4px;
    color: #333333;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 11.0906px;
    line-height: 13px;
    /* identical to box height */

    color: #cacdcd;
  }
`;

export const Image = styled.div`
  margin-bottom: 14px;
`;