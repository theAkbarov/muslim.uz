import styled from "styled-components";

export const Wrapper = styled.div``;
export const PanelWrapper = styled.div`
  background: #24292d;
  padding: 12px 0;
  .right {
    display: flex;
    align-items: center;
    width: 40%;
  }
  .left {
    width: 60%;
    display: flex;
    align-items: center;
  }
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    color: #acacac;
  }
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  .text {
    margin-left: 8px;
  }
  &.speacial {
    margin-right: 40px;
    display: flex;
    align-items: center;
    span {
      white-space: nowrap;
    }
  }
`;
export const Time = styled.span`
  border-right: 1px solid #acacac;
  padding: 0 12px;
`;
export const IslamicDate = styled.span`
  padding: 0 12px;
`;
export const Select = styled.div`
  margin-left: 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  select {
    color: #cccccc;
    padding: 5px 8px;
    outline: none;
    background: #3d3d3d;
    border-radius: 15px;
    border: none;
  }
`;
export const Date = styled.span`
  border-right: 1px solid #acacac;
  padding: 0 12px;
`;
export const FormControl = styled.div`
  display: flex;
  border: 1px solid #5b5b5b;
  border-radius: 4px;
  width: 70%;
  input {
    border: none;
    width: 100%;
    outline: none;
    background-color: transparent;
    padding: 6px 8px;
  }
`;
