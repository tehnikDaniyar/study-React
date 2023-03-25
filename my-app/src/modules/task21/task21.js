
import React, { useState } from "react"

export function Task21() {
	let [checked, setChecked] = useState(true);

	return <>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p>state:{checked ? "On" : "Off"}</p>
	</>
}	