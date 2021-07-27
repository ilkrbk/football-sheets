import React, { useState } from "react";
import { SheetItem } from "./sheetItem";
import styled from "@emotion/styled";

const CollapseBtn = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  > i {
    width: 10px;
    margin-right: 7px;
    color: ${({ theme }) => theme.colors.text};
  }

  > h3 {
    margin-top: 2px;
    font-family: "Roboto";
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const CollapseList = styled.ul`
  padding: 20px 0;
`;

export const SheetGroup = ({ data, isTitle }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {isTitle && (
        <CollapseBtn onClick={toggle}>
          <i className={`fas fa-caret-${isOpen ? "down" : "right"}`} />
          <h3>{data[0].groupName}</h3>
        </CollapseBtn>
      )}
      {isOpen && (
        <CollapseList>
          {data.map((item, index) => (
            <SheetItem key={item.rank} item={item} index={index} />
          ))}
        </CollapseList>
      )}
    </>
  );
};
