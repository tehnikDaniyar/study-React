import { useState } from "react";
const Task29_1 = function () {
	const [items, setItems] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState(null);
	const input = document.querySelector(".them29_1 input");

	let res = items.map((item, index) => <p key={index} >{item}<button onClick={() => { setEditNum(index); input.focus() }}>edit</button></p>);


	function changeItems(event) {
		setItems([...items.slice(0, editNum), event.target.value, ...items.slice(editNum + 1)])
	}


	return <div className="Component them29_1">
		{res}
		<input value={items[editNum] ? items[editNum] : ""} onChange={(e) => changeItems(e)} onBlur={(e) => e.target.value = ""}></input>
	</div >
}
export default Task29_1