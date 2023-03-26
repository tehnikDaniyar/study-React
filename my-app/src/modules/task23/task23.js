import { useState } from "react";

export function Task23() {
	let [value, setValue] = useState(1);

	return <>
		<input
			type="radio"
			name="radio"
			value="1"
			checked={value == 1 ? true : false}
			onChange={(e) => setValue(e.target.value)}
		/>

		<input
			type="radio"
			name="radio"
			value="2"
			checked={value == 2 ? true : false}
			onChange={(e) => setValue(e.target.value)}
		/>

		<input
			type="radio"
			name="radio"
			value="3"
			checked={value == 3 ? true : false}
			onChange={(e) => setValue(e.target.value)}
		/>
		<p>{value}</p>
	</>
}