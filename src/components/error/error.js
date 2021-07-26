import React from "react";
import styled from "@emotion/styled";

const Error = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.mainBackgroung};
  flex-direction: column;

  > h1 {
    margin-top: 0;
    font-family: "Roboto";
    font-size: 15rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  > h3 {
    margin-top: 20px;
    font-family: "Roboto";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 700;
  }

  > p {
    margin-top: 5px;
    font-family: "Roboto";
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  > a {
    margin-top: 40px;
    font-family: "Roboto";
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    padding: 15px 50px;
    border: 2px solid ${({ theme }) => theme.colors.tabLine};
    transition: all ease-in 0.3s;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.activeTab};
      transform: scale(1.2);
    }
  }
`;

export const ErrorBoundary = () => (
  <Error>
    <h1>Oops!</h1>
    <h3>Data Error</h3>
    <p>Check season and tournament</p>
    <a href="/">Go to Homepage</a>
  </Error>
);
