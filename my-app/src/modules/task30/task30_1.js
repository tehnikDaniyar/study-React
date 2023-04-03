import { useState } from "react";
const Task30_1 = function () {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	const [value, setValue] = useState("");

	let res = notes.map((note, index) => <p key={index} onClick={(e) => startEdit(index)}>{note}</p>);

	function startEdit(index) {
		const input = document.querySelector(".task30_1 input")
		setEditNum(index);
		setValue(notes[index]);
		input.focus();
	};

	function changeHandler(event) {
		setValue(event.target.value);

		if (editNum !== null) {
			setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)]);
		}
	};

	function blurHandler() {
		if (editNum === null) {
			setNotes([...notes, value]);
		} else {
			setEditNum(null);
		};
		setValue("");
	};


	return <div className="Component task30_1">
		{res}
		<input value={value} onChange={(e) => changeHandler(e)} onBlur={() => blurHandler()}></input>
	</div>
}
export default Task30_1