import styled from "styled-components";

export const MainLayout = styled.main`
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
`;

export const Carousel = styled.div`
  width: 60%;
  .carousel-item {
    background: url("../../assets/Image/Banner.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .content {
      background: linear-gradient(
        180deg,
        rgba(48, 48, 48, 0.6) -65.62%,
        #303030 164.37%
      );
      backdrop-filter: blur(12px);
      border-radius: 0px 0px 10px 10px;
      padding: 12px 16px;
      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        margin: 0;
        margin-bottom: 12px;
        color: #dddddd;
      }
      .category {
        background: rgba(119, 119, 119, 0.6);
        border-radius: 4px;
        padding: 4px 12px;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
        margin-right: 12px;
      }
    }
  }
`;
export const ArticleWrapper = styled.article`
  width: 35%;
`;
export const Article = styled.div`
  padding: 8px;
  background: #ffffff;
  box-shadow: 0px 4px 24px -4px rgba(125, 125, 125, 0.1);
  border-radius: 8px;
  display: flex;
  img {
    border-radius: 6px 10px 8px 6px;
    width: 40%;
    margin-right: 8px;
    height: 75px;
    object-fit: cover;
  }
  .content {
    width: 60%;
    h3 {
      font-style: normal;
      font-weight: 600;
      margin: 0;
      font-size: 14px;
      line-height: 18px;
      color: #333333;
      margin-bottom: 16px;
    }
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: #cacaca;
      svg {
        margin-right: 4px;
      }
    }
  }
`;
export const Heading = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: #606060;
`;
