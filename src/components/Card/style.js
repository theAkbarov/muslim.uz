import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 42px rgba(125, 125, 125, 0.1);
  border-radius: 8px;
  justify-content: space-between;
  margin-bottom: 16px;
  .content{
    width: 55%;
  }
  padding: 16px;
  img {
    border-radius: 8px;
    width: 40%;
    margin-right: 16px;
    display: block;
  }
`;
export const Label = styled.span`
  background: #21a3f9;
  border-radius: 4px;
  padding: 3px 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: #eeeeee;
`;
export const Type = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-left: 9px;
  color: #acacac;
`;
export const Heading = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  display: block;
  margin: 10px 0 4px;
  color: #333333;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  display: block;
  font-size: 14px;
  line-height: 18px;
  color: #4b4b4b;
  margin: 8px 0 4px;
`;
export const Author = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  display: block;
  line-height: 16px;
  color: #acacac;
`;
export const Footer = styled.div`
  display: flex;
  margin-top: 12px;
  justify-content: flex-end;
  align-items: center;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #cacaca;
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
`;
