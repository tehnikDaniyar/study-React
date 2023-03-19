import React, { useState } from "react";

export function Task18_6() {
	let [valueOne, changeValueOne] = useState(0);
	let [valueTwo, changeValueTwo] = useState(0);
	let [valueThree, changeValueThree] = useState(0);
	let [valueFour, changeValueFour] = useState(0);
	let [valueFive, changeValueFive] = useState(0);

	let arr = [valueOne, valueTwo, valueThree, valueFour, valueFive]


	function getAverage(arr) {
		return arr.reduce((summ, num) => summ + +num, 0) / arr.length
	};

	return <>
		<input value={valueOne} onChange={(event) => changeValueOne(event.target.value)}></input>
		<input value={valueTwo} onChange={(event) => changeValueTwo(event.target.value)}></input>
		<input value={valueThree} onChange={(event) => changeValueThree(event.target.value)}></input>
		<input value={valueFour} onChange={(event) => changeValueFour(event.target.value)}></input>
		<input value={valueFive} onChange={(event) => changeValueFive(event.target.value)}></input>

		<p>{getAverage(arr)}</p>
	</>
}