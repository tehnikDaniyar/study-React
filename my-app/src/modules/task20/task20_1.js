import { useState } from "react";

export function Task20_1() {
	let [value, setValue] = useState("");

	return <>
		<textarea value={value} onChange={(e) => setValue(e.target.value)} />
		<p>{value.toUpperCase()}</p>
	</>
}