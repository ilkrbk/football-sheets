import React, { useState } from "react";
import { TournamentTable } from "./components/TournamentTable";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styled/global";
import { LightTheme, DarkTheme } from "./styled/theme";
import styled from "@emotion/styled";

const Switch = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  border: 2px solid ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.tabs};
  padding: 2px;
  border-radius: 16px;
  width: 60px;
  display: flex;
  transition: all ease-in-out 0.3s;
  justify-content: ${({ theme }) => theme.position.switch};
`;

const SwitchCircle = styled.span`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text};
`;

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggle = () => setIsLightTheme(!isLightTheme);

  return (
    <div className="App">
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <TournamentTable id={46} seasonId={15429} />
        <Switch onClick={toggle}>
          <SwitchCircle />
        </Switch>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
