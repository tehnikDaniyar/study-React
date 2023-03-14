export function Task12_5() {
	const func = (event, param1, param2) => console.log(event, param1, param2);

	return <>
		<button onClick={(event) => func(event.target, "qqq", "www")}>Task12_5</button>
	</>
}