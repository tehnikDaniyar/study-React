import { useState } from "react";
const Task28_1 = function () {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	function getAverage(arr) {
		return arr.reduce((summ, num) => summ + num) / arr.length;
	};

	function handlerChange(index, event) {
		setNumbers([...numbers.slice(0, index)], event.target.value, ...numbers.slice(index + 1))
	}

	const inputs = numbers.map((number, index) => <input key={index} type="text" value={number} onChange={(event) => handlerChange(index, event)}></input>)

	return <div className="Component">
		<p>{getAverage(numbers)}</p>
		{inputs}
	</div>
}
export default Task28_1