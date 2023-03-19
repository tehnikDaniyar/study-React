import React, { useState } from "react";

export function Task18_2() {
	let [valueOne, changeValueOne] = useState("valueOne");
	let [valueTwo, changeValueTwo] = useState("valueTwo");

	return <>
		<input value={valueOne} onChange={(event) => changeValueOne(event.target.value)}></input>
		<input value={valueTwo} onChange={(event) => changeValueTwo(event.target.value)}></input>

		<p>{valueOne}</p>
		<p>{valueTwo}</p>
	</>
}