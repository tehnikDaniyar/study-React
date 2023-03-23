import { useState } from "react";

export function Task19_3() {
	function getMultiDevisiors(num) {
		let arr = [];

		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				arr.push(i);
			};
		};
		console.log(arr);
		return arr.reduce((res, num) => res * num);
	};

	let [num, setNum] = useState(0);
	let [res, setRes] = useState(0)

	return <>
		<input value={num} onChange={(e) => setNum(e.target.value)} onBlur={(e) => setRes(getMultiDevisiors(e.target.value))}></input>
		<p>{res}</p>
	</>

}