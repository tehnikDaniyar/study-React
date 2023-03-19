import React, { useState } from "react";

export function Task18_5() {
	let [value, changeValue] = useState(0);

	function convertTemp(value) {
		return Math.floor((value - 32) * (5 / 9));
	}

	return <>
		<input value={value} onChange={(event) => changeValue(event.target.value)}></input>
		<p>{convertTemp(value)}</p>
	</>
}