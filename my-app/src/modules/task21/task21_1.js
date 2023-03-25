
import React, { useState } from "react"

export function Task21_1() {
	let [checked, setChecked] = useState(true);
	let [message, setMessage] = useState("");

	return <>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<button onClick={() => setMessage(checked ? "Hello" : "Bye")}>Say:{checked ? "Hello" : "Bye"}</button>
		<p>{message}</p>
	</>
}	