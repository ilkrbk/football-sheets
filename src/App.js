import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "./components/error/error";
import { Sheet } from "./components/sheet/sheet";
import { Tab } from "./components/tab/tab";
import Loader from "react-js-loader";
import axios from "axios";

function App() {
	const [dataObj, setDataObj] = useState()
	const [loader, setLoader] = useState(true)
	const [activeTab, setActiveTab] = useState(0)
	const [isError, setIsError] = useState(false)
	const [stageId, setStageId] = useState()
	const [tournamentId] = useState(46)
	const [seasonId] = useState(15429)

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
		try{
			if (!Number.isInteger(stageId) || stageId < 0) {
				throw new Error('not int')
			}
			setLoader(true)
			await axios.get(`https://ss2.tjekscores.dk/tournaments/${tournamentId}/standings?&addResults=true&resultsLimit=6&type=${type}&form=last&stageId=${stageId}`)
			.then(response => {
				setDataObj(response.data.sort((a, b) => a.points > b.points ? -1 : 1))
			})
			.catch((error) => {
				throw new Error(`Error ${error}`)
			})
			await setTimeout(() => {
				setActiveTab(type)
				setLoader(false)
			}, 200);
		}catch{
			setIsError(true)
		}
	}

	const requestStageId = async () => {
		try{
			await axios.get(`https://ss2.tjekscores.dk/tournaments/${tournamentId}/season?seasonId=${seasonId}`)
			.then(response => {
				setStageId(response.data.season.stages[0].id)
				tabClick('', response.data.season.stages[0].id)
			})
			.catch(error => {
				if (tournamentId === undefined) {
					setIsError(true)
					throw new Error('Error tournamentId')
				}
				if (seasonId === undefined) {
					setIsError(true)
					throw new Error('Error seasonId')
				}
				throw new Error(`Error ${error}`)
			})
		}catch{
			setIsError(true)
		}
	}

	useEffect(() => {
		requestStageId()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isError) {
		return <ErrorBoundary/>
	}
	return (
		<div className="App">
			<ul className="tab__list">
				{tabs.map((tab) => (
					<Tab click={tabClick} stageId={stageId} activeTab={activeTab} type={tab.type} key={tab.id} text={tab.text}/>
				))}
			</ul>
			{!isError && loader
				?<Loader type="spinner-circle" bgColor={"#015699"} size={50} />
				:<Sheet data={dataObj}/>
			}
		</div>
	);
}

export default App;
