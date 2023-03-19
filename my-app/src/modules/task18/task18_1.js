import React, { useState } from "react";

export function Task18_1() {
	let [value, changeValue] = useState("text");

	return <>
		<input value={value} onChange={(event) => changeValue(event.target.value)}></input>
		<p>{value}</p>
	</>
}