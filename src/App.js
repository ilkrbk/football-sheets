import React, { useState, useEffect } from 'react';
import { Sheet } from "./components/sheet/sheet";
import { Tab } from "./components/tab/tab";
import axios from "axios";
import Loader from "react-js-loader";

function App() {
	const [dataObj, setDataObj] = useState()
	const [loader, setLoader] = useState(true)
	const [activeTab, setActiveTab] = useState(0)
	const [stageId, setStageId] = useState()
	const [defaultVar] = useState({
		tournamentId: 46,
		seasonId: 15429
	})

	const tabs = [
		{
			id: 1,
			text: "Standing",
			type: ""
		},{
			id: 2,
			text: "Home",
			type: "home"
		},{
			id: 3,
			text: "Away",
			type: "away"
		}
	]

	const tabClick = async (type, stageId) => {
		setLoader(true)
		await axios.get(`https://ss2.tjekscores.dk/tournaments/${defaultVar.tournamentId}/standings?&addResults=true&resultsLimit=6&type=${type}&form=last&stageId=${stageId}`)
        .then(response => setDataObj(response.data.sort((a, b) => a.points > b.points ? -1 : 1)));
		await setTimeout(() => {
			setActiveTab(type)
			setLoader(false)
		}, 200);
	}

	const requestStageId = async () => {
		await axios.get(`https://ss2.tjekscores.dk/tournaments/${defaultVar.tournamentId}/season?seasonId=${defaultVar.seasonId}`)
		.then(response => {
			setStageId(response.data.season.stages[0].id)
			tabClick('', response.data.season.stages[0].id)
		});
	}

	useEffect(() => {
		requestStageId()
	}, []);

	return (
		<div className="App">
			<ul className="tab__list">
				{tabs.map((tab) => (
					<Tab click={tabClick} stageId={stageId} activeTab={activeTab} type={tab.type} key={tab.id} text={tab.text}/>
				))}
			</ul>
			{loader ?
                <Loader type="spinner-circle" bgColor={"#015699"} size={50} />
                :
                <Sheet data={dataObj}/>
            }
		</div>
	);
}

export default App;
