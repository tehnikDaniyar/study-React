import { useState } from "react";

export function Task22_1() {
	let [value, setValue] = useState("");

	return <>
		<select value={value} onChange={(e) => setValue(e.target.value)}>
			<option disabled>choose city</option>
			<option>New-York</option>
			<option>Bishkek</option>
		</select>
		<p>{value}</p>
	</>
}