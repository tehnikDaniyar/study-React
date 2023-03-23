import { useState } from "react";

export function Task19_2() {
	let now = new Date();
	let strNowDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
	let [dateOne, setDateOne] = useState(strNowDate);
	let [dateTwo, setDateTwo] = useState(strNowDate);
	let [result, setResult] = useState(0);

	function getAmountDays(str1, str2) {
		let a = new Date(str1).getTime();
		let b = new Date(str2).getTime();
		let result = a > b ? a - b : b - a;
		return result / 1000 / 60 / 60 / 24;
	};

	return <>
		<input value={dateOne} onChange={(e) => setDateOne(e.target.value)}></input>
		<input value={dateTwo} onChange={(e) => setDateTwo(e.target.value)}></input>
		<button onClick={() => setResult(getAmountDays(dateOne, dateTwo))}>get amound days</button>
		<p>{result}</p>
	</>

}