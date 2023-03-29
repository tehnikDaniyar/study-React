import { useState } from "react";

export function Task27_1() {
	let [items, setItems] = useState(['a', 'b', 'c', 'd', 'e']);
	console.log(items);

	let list = items.map((item, index) => <li key={index}>{item}<button onClick={() => setItems([...items.slice(0, index), ...items.slice(index + 1)])}>delete</button></li>);

	return <div className="Component">
		{list}
	</div>
}





