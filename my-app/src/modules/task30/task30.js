import { useState } from "react";
const Task30 = function () {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	const [value, setValue] = useState("");
	const input = document.querySelector(".task30 input");
	console.log(input);

	let res = notes.map((note, index) => <p key={index} onClick={() => { setEditNum(index); input.focus() }}>{note}</p>);

	//========functions==============
	function changeItem(event) {
		setNotes([...notes.slice(0, editNum), event.target.value, ...notes.slice(editNum + 1)])
	};

	function stopEdit() {
		setEditNum(null);
	};

	function changeValue(event) {
		setValue(event.target.value);
	};

	function addItem(event) {
		setNotes([...notes, value]);
	};

	let renderInput;
	if (editNum !== null) {
		renderInput = <input
			value={notes[editNum]}
			onChange={(e) => changeItem(e)}
			onBlur={() => stopEdit()}
			className="red"
		>
		</input>
	} else {
		renderInput = <input
			value={value}
			onChange={(e) => changeValue(e)}
			onBlur={() => { addItem(); setValue("") }}
			className="green"
		></input>
	}

	return <div className="Component task30">
		{res}
		{renderInput}
	</div>
}
export default Task30