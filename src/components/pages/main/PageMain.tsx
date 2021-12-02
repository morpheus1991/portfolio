import React from "react";
import styled from "styled-components";
import Ability from "./Ability";
import CoverSlide from "./CoverSlide";

const Block = styled.div`
  margin-top: 400px;
  padding-bottom: 2000px;
`;
const PageMain = () => {
  return (
    <Block>
      <CoverSlide></CoverSlide>
      <Ability></Ability>
    </Block>
  );
};

export default PageMain;
