import styled from "styled-components";

export const Wrapper = styled.div``;
export const Aside = styled.aside`
width: 23%;
`;
export const Section = styled.section`
  width: 75%;
`;
export const Nav = styled.nav`
  padding: 20px 44px;
  background: #ffffff;
  margin-bottom: 24px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  button {
    display: flex;
    align-items: center;
    font-style: normal;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    text-decoration: none;
    color: #999999;
    svg {
      path {
        fill: #999999;
      }
    }

    &.active {
      border-bottom: 2px solid #00a3ff;
      color: #00a3ff;
      svg {
        path {
          fill: #00a3ff;
        }
      }
    }
    svg {
      margin-right: 5px;
    }
  }
`;
