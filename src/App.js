import React, { useState } from "react";
import { TournamentTable } from "./components/tournament";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyle } from "./styled/global";
import { LightTheme, DarkTheme } from "./styled/theme";
import styled from "@emotion/styled";
import Select from "react-select";

const options = [
  { value: {tournamentId: 46, seasonId: 15429}, label: 'Superliga 2020/2021' },
  { value: {tournamentId: 47, seasonId: 15382}, label: 'Premier League' },
  { value: {tournamentId: 42, seasonId: 15237}, label: 'CL 2020/2021' },
  { value: {tournamentId: 73, seasonId: 15238}, label: 'EL' },
];

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
  cursor: pointer;
`;

const SwitchCircle = styled.span`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text};
`;

const SelectStyle = styled.div`
  display: flex;
  padding: 20px 100px;
  font-family: "Roboto";
  font-size: 1rem;
  color: #015699;
  > div {
    width: 100%;
  }
`;


function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggle = () => setIsLightTheme(!isLightTheme);

  return (
    <div className="App">
      <ThemeProvider theme={isLightTheme ? LightTheme : DarkTheme}>
        <TournamentTable id={selectedOption}/>
        <Switch onClick={toggle}>
          <SwitchCircle />
        </Switch>
        <SelectStyle>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </SelectStyle>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
