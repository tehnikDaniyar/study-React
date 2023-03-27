import { useState } from "react";

export function Task25_2() {
	let [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const index = 3;

	let res = notes.map((note, index) => <p key={index}>{note}</p>);

	return <>
		{res}
		<button onClick={() => setNotes([...notes.slice(0, index), notes.slice(index + 1)])}>remove element</button>
	</>
}