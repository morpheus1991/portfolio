import React from "react";
import styled from "styled-components";
import CoverSlide from "./CoverSlide";

const Block = styled.div`
  margin-top: 400px;
  padding-bottom: 2000px;
`;
const PageMain = () => {
  return (
    <Block>
      <CoverSlide></CoverSlide>
    </Block>
  );
};

export default PageMain;
