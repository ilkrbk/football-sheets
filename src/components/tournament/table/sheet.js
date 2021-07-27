import React from "react";
import { SheetHeader } from "./sheetHeader";
import { SheetGroup } from "./sheetGroup";
import styled from "@emotion/styled";

const SheetWrap = styled.section`
  margin-top: 50px;
  padding: 0 45px 0 30px;
`;

export const Sheet = ({ data }) => (
  <SheetWrap>
    <SheetHeader />
    {data.map((array, index) => (
      <SheetGroup data={array} isTitle={data.length !== 1} key={index} />
    ))}
  </SheetWrap>
);
