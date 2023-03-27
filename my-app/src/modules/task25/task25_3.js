import { useState } from "react";

export function Task25_3() {
	let [notes, setNotes] = useState([1, 2, 3, 4, 5]);

	let res = notes.map((note, index) => <p key={index}>{note}</p>);

	const index = 3;

	return <>
		{res}
		<button onClick={() => setNotes([...notes.slice(0, index), "!", ...notes.slice(index + 1)])}>change element</button>
	</>
}