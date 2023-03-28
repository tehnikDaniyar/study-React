import { useState } from "react";

export function Task26_1() {
	let [items, setItems] = useState(['a', 'b', 'c', 'd', 'e']);
	let [value, setValue] = useState("");

	let list = items.map((item, index) => <li key={index}>{item}</li>);

	return <>
		<ul>
			{list}
		</ul>
		<input value={value} onChange={(e) => setValue(e.target.value)} onBlur={() => setItems([...items, value])}></input>
	</>
}