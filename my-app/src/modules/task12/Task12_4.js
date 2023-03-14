export function Task12_4() {
	const func = (param1, param2, event) => console.log(param1, param2, event);

	return <>
		<button onClick={(event) => func("xxx", "yyy", event.target)}>Task12_4</button>
	</>
}