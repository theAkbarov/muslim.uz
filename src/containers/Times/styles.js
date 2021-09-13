import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
    margin-left: 90px;
  .times {
    margin: 0 16px;

    span {
      text-align: center;
      font-style: normal;
      font-weight: bold;
      display: block;
      font-size: 14px;
      margin-bottom: 6px;
    }
    .name {
      font-weight: normal;
      color: #969696;
    }
    .current {
      line-height: 17px;
      color: #62696d;
    }
  }
`;
