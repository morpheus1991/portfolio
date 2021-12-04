import React from "react";
import styled from "styled-components";
import ScaleUpBackgrund from "./\bScaleUpBackgrund";
import Ability from "./Ability";
import BeforeAfter from "./BeforeAfter";
import CoverSlide from "./CoverSlide";

const Block = styled.div`
  margin-top: 400px;
  /* padding-bottom: 2000px; */
`;
const PageMain = () => {
  return (
    <Block>
      <CoverSlide></CoverSlide>
      <Ability></Ability>
      <BeforeAfter></BeforeAfter>
      <ScaleUpBackgrund></ScaleUpBackgrund>
    </Block>
  );
};

export default PageMain;
