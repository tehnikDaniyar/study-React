import { useState } from 'react';

export function Task25() {
	let [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	console.log(notes.length);

	let result = notes.map((note, index) => <p key={index}>{note}</p>);
	let counter = notes[notes.length - 1];

	return <>
		{result}
		<button onClick={() => setNotes([...notes, ++counter])}>add element</button>
	</>
}