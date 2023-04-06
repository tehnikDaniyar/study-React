import { useState } from "react";
const Task30_2 = function () {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(false);

	let res = notes.map((note, index) => <p key={index} onClick={() => setEditNum(index)}>{note}</p>);

	function editNote(event) {
		setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
	};

	function createNote() {
		if (!editNum && editNum != 0) {
			const res = [...notes, ""];
			setNotes(res);
			setEditNum(res.length - 1);
		}
	};

	function stopEdit() {
		setEditNum(null);
	};

	return <div className="Component">
		{res}
		<input
			value={editNum != null ? notes[editNum] : ""}
			onChange={editNote}
			onFocus={createNote}
			onBlur={stopEdit}
		></input>
	</div>
}
export default Task30_2
