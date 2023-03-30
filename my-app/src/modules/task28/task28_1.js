import { useState } from "react";
const Task28_1 = function () {
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	console.log(Number("s"));

	function getAverage(arr) {
		// return arr.reduce((summ, num) => summ + num) / arr.length;
		let sum = 0;
		for (let num of arr) {
			if (num) {
				sum += num;
			};
		};
		return sum / arr.filter(n => n > 0).length;
	};

	function handlerChange(index, event) {
		if (Number(event.target.value) || Number(event.target.value) === 0) {
			setNumbers([...numbers.slice(0, index), Number(event.target.value), ...numbers.slice(index + 1)]);
		} else {
		};
	};

	const inputs = numbers.map((number, index) => <input key={index} type="text" value={number} onChange={(event) => handlerChange(index, event)}></input>)

	return <div className="Component">
		<p>{getAverage(numbers)}</p>
		{inputs}
	</div>
}
export default Task28_1