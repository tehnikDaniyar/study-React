import { useState } from "react";

export function Task20_2() {
	let [value, setValue] = useState("0");

	return <>
		<textarea value={value} onChange={(e) => value.length !== 0 || value !== "0" ? setValue(e.target.value) : setValue(0)} />
		<p>{value.split("").reduce((s, n) => s + +n, 0)}</p>
	</>
}