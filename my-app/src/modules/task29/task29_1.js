import { useState } from "react";
const Task29_1 = function () {
	const [items, setItems] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState(null);

	let res = items.map((item, index) => <p key={index} onClick={() => setEditNum(index)}>{item}</p>);

	function changeItems(event) {
		setItems([...items.slice(0, editNum), event.target.value, ...items.slice(editNum + 1)])
	}


	return <div className="Component">
		{res}
		<input value={items[editNum] ? items[editNum] : ""} onChange={(e) => changeItems(e)}></input>
	</div>
}
export default Task29_1

//onClick={} 