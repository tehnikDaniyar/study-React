import { useState } from "react";

export function Task19_1() {
	let [valueOne, setValueOne] = useState('');
	let [valueTwo, setValueTwo] = useState('');
	let [result, setResult] = useState(0);

	return <>
		<input value={valueOne} onChange={(e) => setValueOne(e.target.value)}></input>
		<input value={valueTwo} onChange={(e) => setValueTwo(e.target.value)}></input>
		<button onClick={() => setResult(+valueOne + +valueTwo)}>+</button>
		<button onClick={() => setResult(valueOne * valueTwo)}>*</button>
		<p>{result}</p>
	</>
}