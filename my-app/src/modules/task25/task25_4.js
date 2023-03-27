import { useState } from "react";

export function Task25_4() {
	let [notes, setNotes] = useState([1, 3, 2, 4, 5]);

	let res = notes.map((note, index) => <p key={index}>{note}</p>);

	return <>
		{res}
		<button onClick={() => setNotes([...notes].reverse())}>reverse</button>
	</>
}