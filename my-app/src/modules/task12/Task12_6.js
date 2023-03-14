export function Task12_6() {
	const func = (param1, event, param2) => console.log(param1, event, param2,);

	return <>
		<button onClick={(event) => func("qqq", event.target, "www")}>Task12_6</button>
	</>
}