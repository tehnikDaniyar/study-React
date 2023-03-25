import { useState } from "react";

export function Task22_2() {
	let [value, setValue] = useState("");
	const cityes = [
		"Bishkek",
		"New-York",
		"Alma-Ata"
	];

	const options = cityes.map((city, index) => <option key={index}>{city}</option>);

	return <>
		<select value={value} onChange={(e) => setValue(e.target.value)}>
			{options}
		</select>
		<p>{value}</p>
	</>
}