import React, { useState, useEffect } from "react";
import { TournamentTable } from "./components/TournamentTable";
import Loader from "react-js-loader";

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  return <div className="App">{loader ? <Loader type="spinner-circle" bgColor={"#015699"} size={50} /> : <TournamentTable id={46} seasonId={15429} />}</div>;
}

export default App;
