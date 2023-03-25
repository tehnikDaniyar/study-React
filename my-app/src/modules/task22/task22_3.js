import { useState } from "react";

export function Task22_3() {
	let [value, setValue] = useState("");

	return <>
		<select value={value} onChange={(e) => setValue(e.target.value)}>
			<option value="1">0-12</option>
			<option value="2">13-17</option>
			<option value="3">18-25</option>
			<option value="4">25-more</option>
		</select>
		<p>group:{value}</p>
	</>
}