import styled from "styled-components";

export const Wrapper = styled.footer`
  background: #24292d;
  padding: 57px 0 40px;
  .top {
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid #505050;
    .left {
      width: 20%;
      margin-right: 40px;
      img {
        margin-bottom: 14px;
        width: 100%;
      }
    }
    .right {
      width: 75%;
      p {
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #eeeeee;
      }
    }
  }
  .bottom {
    text-align: center;
    span {
      font-style: normal;
      font-weight: normal;
      display: block;
      font-size: 16px;
      line-height: 18px;
      margin: 0;
      margin: 24px 0 14px;
      color: #cccccc;
    }
    p {
      font-style: normal;
      display: block;
      margin: 0;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #cccccc;

      a {
        text-decoration-line: underline;
        color: #5393b8;
      }
    }
  }
`;
