import styled from "styled-components";

export const Wrapper = styled.div``;
export const Main = styled.div`
  display: flex;
  padding: 23px 0;
  align-items: center;
  justify-content: space-between;
`;
export const Navbar = styled.div`
  border: 1px solid #ececec;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f2f2f2 100%);
  padding: 8px 0;
  nav {
    a {
      padding: 4.5px 10px;
      margin: 0 10px;
      font-style: normal;
      display: inline-block;
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #606060;
    }
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  button {
    padding: 6px 10px;
    background: #5ab0ff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    border: none;
    margin-left: 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    svg {
      margin-right: 6px;
      fill: white;
    }
  }
`;
