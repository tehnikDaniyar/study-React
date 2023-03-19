import React, { useState } from "react";

export function Task18_3() {

	let [value, changeValue] = useState("value");



	return <>
		<input value={value} onChange={(event) => changeValue(event.target.value)}></input>
		<p>{value.length}</p>
	</>
}