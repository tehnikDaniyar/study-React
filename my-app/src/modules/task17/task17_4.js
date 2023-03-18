import React, { useState } from "react";

export function Task17_4() {
	let [counter, setCounter] = useState(0);

	return <>
		<span onClick={() => setCounter(counter + 1)}>{counter}</span>
	</>
}